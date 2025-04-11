<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db_connection.php");

$query = "SELECT perro.dueño, perro.nombre, citas.*
          FROM perro
          INNER JOIN citas ON citas.clave_perro = perro.clave";
$result = mysqli_query($con, $query);

$mascota = [];

while ($row = mysqli_fetch_assoc($result)) {
    $clave = $row['clave_perro']; // Usamos clave_perro que debe estar en las citas
    
    // Asegurarse de que las citas estén agrupadas por perro
    if (!isset($mascota[$clave])) {
        $mascota[$clave] = [
            'dueño' => $row['dueño'],
            'nombre' => $row['nombre'],
            'citas' => []
        ];
    }

    // Añadir las citas al perro correspondiente
    $mascota[$clave]['citas'][] = [
        'id' => $row['id'],
        'servicio' => $row['servicio'],
        'fecha' => $row['fecha']
    ];
}

echo json_encode(array_values($mascota));
?>
