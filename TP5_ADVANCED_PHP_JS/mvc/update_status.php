<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id = intval($_POST['id']);
    $completed = intval($_POST['completed']);

    $stmt = $conn->prepare("UPDATE tasks SET completed = ? WHERE id = ?");
    $stmt->bind_param("ii", $completed, $id);
    $stmt->execute();
}
