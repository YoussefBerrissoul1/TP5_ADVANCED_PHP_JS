<?php
require './mvc/db.php';

$sql = "SELECT * FROM tasks";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <script src="./js/main.js" defer ></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h2 class="mb-3">To-Do List</h2>

        <form method="POST" action="./mvc/insert.php">
            <div class="mb-3">
                <input id="input" type="text" name="task" class="form-control" placeholder="Entrez une nouvelle tâche" required>
            </div>
            <button id="btn" type="submit" class="btn btn-primary mb-3">Ajouter une tâche</button>
        </form>        

        <ul class="list-group">
            <?php while ($task = $result->fetch_assoc()): ?>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="task-text"><?= htmlspecialchars($task['task']) ?></span>
                    <div class="button-container">

                        <form method="POST" action="./mvc/delete.php" style="display:inline;">
                            <input type="hidden" name="id" value="<?= $task['id'] ?>">
                            <button type="submit" class="delete btn btn-danger btn-sm">Delete</button>
                        </form>

                        <form method="POST" action="./mvc/update.php" style="display:inline;">
                            <input type="hidden" name="id" value="<?= $task['id'] ?>">
                            <input class="hideTask" style="display: none;" type="text" name="task" value="<?= htmlspecialchars($task['task']) ?>" required>
                            <button type="submit" class="edit btn btn-warning btn-sm">Edit</button>
                        </form>
                    </div>
                </li>
            <?php endwhile; ?>
        </ul>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
