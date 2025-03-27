<?php
require 'db.php'; 
if (!empty($_POST['id']) && !empty($_POST['task'])) {
    $id = $_POST['id'];
    $task = $_POST['task'];
    mysqli_query($conn, "UPDATE tasks SET task = '$task' WHERE id = $id");
}


header("Location: ../index.php");
?>
