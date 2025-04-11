<?php
// registro.php
include("db_connection.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["error" => "No se recibieron datos"]);
    exit();
}

if ( isset($data->nombre) && isset($data->tipo) && isset($data->kilos) && isset($data->precio)) {
    $nombre = mysqli_real_escape_string($con, $data->nombre);
    $tipo = mysqli_real_escape_string($con, $data->tipo);
    $kilos = mysqli_real_escape_string($con, $data->kilos);
    $precio = mysqli_real_escape_string($con, $data->precio);
    

    $query = "INSERT INTO `alimento`(`nombre`, `tipo`, `kilos`, `precio`) VALUES 
                         ('$nombre', '$tipo', '$kilos', '$precio')";
    
    if (mysqli_query($con, $query)) {
        echo json_encode(["mensaje" => "✅ Alimento registrada correctamente"]);
    } else {
        echo json_encode(["error" => "❌ Error al registrar el Alimento"]);
    }
} else {
    echo json_encode(["error" => "❗ Datos incompletos"]);
}
?>