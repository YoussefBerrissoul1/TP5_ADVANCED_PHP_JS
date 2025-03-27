<?php

$env = parse_ini_file('.env');

$conn = mysqli_connect($env['DB_HOST'], $env['DB_USER'], $env['DB_PASSWORD'], $env['DB_NAME']);

if (!$conn) {
    die('Erreur de connexion : ' . mysqli_connect_error());
}

echo 'Connexion réussie !';
?>
