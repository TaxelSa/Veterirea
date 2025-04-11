<?php
// agendarCita.php
include("db_connection.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Leer los datos del cuerpo de la solicitud (POST)
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["error" => "No se recibieron datos"]);
    exit();
}

// Validar que se recibieron todos los datos necesarios
if (isset($data->clave) && isset($data->servicio) && isset($data->fecha) && isset($data->descripcion)) {
    $clave = mysqli_real_escape_string($con, $data->clave);
    $servicio = mysqli_real_escape_string($con, $data->servicio);
    $fecha = mysqli_real_escape_string($con, $data->fecha);
    $descripcion = mysqli_real_escape_string($con, $data->descripcion);

    // Preparar la consulta SQL para insertar la cita
    $query = "INSERT INTO citas (clave_perro, servicio, fecha, descripcion) 
              VALUES ('$clave', '$servicio', '$fecha', '$descripcion')";

    // Ejecutar la consulta y manejar la respuesta
    if (mysqli_query($con, $query)) {
        echo json_encode(["mensaje" => "✅ Cita agendada con éxito"]);
    } else {
        echo json_encode(["error" => "❌ Error al agendar la cita"]);
    }
} else {
    echo json_encode(["error" => "❗ Datos incompletos"]);
}
?>
