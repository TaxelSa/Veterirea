<?php
include_once("PerroC.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$objPerro = new Perro();
$respuesta = ["error" => ""];

if (isset($_POST["razas"], $_POST["tamano"], $_POST["sexo"])) {
    $raza = $_POST["razas"];
    $tamano = $_POST["tamano"];
    $sexo = $_POST["sexo"];
    
    // Calcular el costo según los parámetros
    $costo = $objPerro->calcularCosto($raza, $tamano, $sexo);

    if ($costo !== null) {
        $respuesta = [
            "costo" => $costo,
            "raza" => $raza,
            "mensaje" => "Costo calculado correctamente"
        ];
    } else {
        $respuesta["error"] = "Raza no encontrada.";
    }
} elseif (isset($_POST["nombre"], $_POST["fecha"])) {
    // Simulación de agendamiento de cita
    $nombre = $_POST["nombre"];
    $fecha = $_POST["fecha"];
    $agendado = $objPerro->agendarCita($nombre, $_POST["razas"], $fecha);
    $respuesta = $agendado;
} else {
    $respuesta["error"] = "Faltan parámetros.";
}

echo json_encode($respuesta);
?>