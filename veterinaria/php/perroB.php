<?php
include("Mascota.php");

class Perro {
    private $razas = [
        "chihuahua" => 155,
"golden" => 215,
"pastor" => 265,
"labrador" => 225,
"beagle" => 185,
"poodle" => 200,
"bulldog" => 245,
"dachshund" => 165,
"rottweiler" => 275,
"husky" => 255,
"boxer" => 235,
"pomerania" => 195,
"doberman" => 285,
"shih tzu" => 175,
"cocker spaniel" => 235,
"schnauzer" => 205,
"pug" => 170,
"terrier" => 165,
"mastin" => 295,
"akita" => 305,
"corgi" => 215,
"shetland" => 245,
"chow chow" => 250,
"bernese mountain dog" => 325,
"border collie" => 220,
"dalmatian" => 255,
"samoyedo" => 275,
"basset hound" => 175,
"shiba inu" => 215,
"great dane" => 345,
"alaskan malamute" => 335,
        
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