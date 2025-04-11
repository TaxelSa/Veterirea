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

if ( isset($data->nombre) && isset($data->raza) && isset($data->dueño) && isset($data->tamaño) 
    && isset($data->sexo)) {
    $nombre = mysqli_real_escape_string($con, $data->nombre);
    $raza = mysqli_real_escape_string($con, $data->raza);
    $dueño = mysqli_real_escape_string($con, $data->dueño);
    $tamaño = mysqli_real_escape_string($con, $data->tamaño);
    $sexo = mysqli_real_escape_string($con, $data->sexo);

    $query = "INSERT INTO perro (nombre, raza, dueño, tamano, sexo) 
              VALUES ('$nombre', '$raza', '$dueño', '$tamaño', '$sexo')";
    
    if (mysqli_query($con, $query)) {
        echo json_encode(["mensaje" => "✅ Mascota registrada correctamente"]);
    } else {
        echo json_encode(["error" => "❌ Error al registrar la mascota"]);
    }
} else {
    echo json_encode(["error" => "❗ Datos incompletos"]);
}
?>