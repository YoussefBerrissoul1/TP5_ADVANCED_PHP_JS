<?php
require 'db.php'; 

if (!empty($_POST['task'])) {
    $task = $_POST['task'];
    mysqli_query($conn, "INSERT INTO tasks (task) VALUES ('$task')");
}

header("Location: index.php");
exit;
?>
