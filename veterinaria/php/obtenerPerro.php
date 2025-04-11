<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db_connection.php");

// Verificar si se proporciona una clave
if (!isset($_GET['clave'])) {
    echo json_encode(["error" => "Falta la clave del perro"]);
    exit();
}

$clave = intval($_GET['clave']);

// Preparar la consulta para obtener el perro por clave
$query = "SELECT clave, nombre, raza, dueño, tamano, sexo FROM perro WHERE clave = ?";
$stmt = mysqli_prepare($con, $query);
mysqli_stmt_bind_param($stmt, "i", $clave);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);

if ($row = mysqli_fetch_assoc($result)) {
    echo json_encode($row);
} else {
    echo json_encode(["error" => "Perro no encontrado"]);
}

mysqli_close($con);
?>
