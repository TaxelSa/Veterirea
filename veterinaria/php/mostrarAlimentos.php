<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db_connection.php");

$query = "SELECT * FROM alimento";
$result = mysqli_query($con, $query);

$mascota = [];

while ($row = mysqli_fetch_assoc($result)) {
    $mascota[] = $row;
}

echo json_encode($mascota);
?>