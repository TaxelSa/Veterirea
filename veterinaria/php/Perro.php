<?php
include("Mascota.php");

class Perro {
    private $razas = [
        "chihuahua" => 150,
        "golden" => 200,
        "pastor" => 250,
        "labrador" => 220,
        "beagle" => 180,
        "poodle" => 210,
        "bulldog" => 230,
        "dachshund" => 170,
        "rottweiler" => 280,
        "husky" => 260,
        "boxer" => 240,
        "pomerania" => 190,
        "doberman" => 270,
        "shih tzu" => 160,
        "cocker spaniel" => 220,
        "schnauzer" => 200,
        "pug" => 180,
        "terrier" => 160,
        "mastin" => 300,
        "akita" => 290,
        "corgi" => 210,
        "shetland" => 250,
        "chow chow" => 240,
        "bernese mountain dog" => 310,
        "border collie" => 230,
        "dalmatian" => 250,
        "samoyedo" => 270,
        "basset hound" => 180,
        "shiba inu" => 220,
        "great dane" => 350,
        "alaskan malamute" => 330,
        // Puedes agregar más razas aquí con su costo base.
    ];

    function calcularCosto($raza, $tamano, $sexo) {
        // Verifica si la raza existe
        if (!isset($this->razas[$raza])) {
            return null;
        }

        $costoBase = $this->razas[$raza];

        // Ajustar el costo según el tamaño
        if ($tamano === "grande") {
            $costoBase += 50; // Ejemplo: $50 extra para perros grandes
        } elseif ($tamano === "mediano") {
            $costoBase += 30; // Ejemplo: $30 extra para perros medianos
        }

        // Ajustar el costo según el sexo (por ejemplo, más barato si es hembra)
        if ($sexo === "hembra") {
            $costoBase -= 20; // Ejemplo: descuento de $20 si es hembra
        }

        return $costoBase;
    }

    function agendarCita($nombre, $raza, $fecha) {
        // Simulación de agendamiento de una cita
        return [
            "nombre" => $nombre,
            "raza" => $raza,
            "fecha" => $fecha,
            "mensaje" => "Cita agendada con éxito para el corte de pelo."
        ];
    }
}
?>