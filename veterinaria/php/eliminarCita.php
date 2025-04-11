<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->citaId)) {  // Ahora PHP busca 'citaId'
    $cita_id = mysqli_real_escape_string($con, $data->citaId);

    // Eliminar la cita asociada al perro
    $query = "DELETE FROM citas WHERE id = '$cita_id'";

    if (mysqli_query($con, $query)) {
        echo json_encode(["mensaje" => "Cita eliminada correctamente"]);
    } else {
        echo json_encode(["mensaje" => "Error al eliminar la cita"]);
    }
} else {
    echo json_encode(["mensaje" => "Datos insuficientes para eliminar la cita"]);
}
?>
