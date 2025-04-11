<?php 
include_once("Perro.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$objPerro = new Perro();
$respuesta = ["error" => ""];

if (isset($_POST["razas"])) {
    $raza = $_POST["razas"];
    $objeto = $objPerro->buscar($raza);

    if ($objeto) {
        $respuesta = [
            "nombre" => $objeto->getNombre(),
            "costo" => $objeto->getCosto(),
            "raza" => $objeto->getRaza(),
            "foto" => $objeto->getFoto()
        ];
    } else {
        $respuesta["error"] = "No se encontró información para la raza seleccionada.";
    }
} else {
    $respuesta["error"] = "No se recibió la raza.";
}

echo json_encode($respuesta);
?>
