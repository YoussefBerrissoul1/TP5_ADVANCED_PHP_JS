<?php
require './db.php';
$conn->query("DELETE FROM tasks WHERE completed = 1");
header("Location: ../index.php");
exit();
?>
