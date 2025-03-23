<?php
$file = "tasks.txt";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task = trim($_POST["task"]); 

    if (!empty($task)) {
        file_put_contents($file, $task . PHP_EOL, FILE_APPEND);
    }
}

header("Location: index.php");
exit;
?>
