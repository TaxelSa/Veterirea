<?php
// db_connection.php

$host = "localhost"; // O la IP de tu servidor de base de datos
$user = "root"; // Tu usuario de la base de datos
$password = ""; // Tu contraseña de la base de datos
$dbname = "veterinaria"; // Nombre de tu base de datos

// Crear la conexión
$con = mysqli_connect($host, $user, $password, $dbname);

// Verificar la conexión
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>