<?php
require 'db.php'; // Connexion à la base de données

if (!empty($_POST['id'])) {
    $id = $_POST['id'];
    mysqli_query($conn, "DELETE FROM tasks WHERE id = $id");
}

header("Location: index.php");
exit;
?>
