<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="js/main.js" defer></script>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <div class="container mt-4">
        <h2 class="mb-3">To-Do List</h2>

        <?php
        $file = "tasks.txt";
        $tasks = file_exists($file) ? file($file, FILE_IGNORE_NEW_LINES) : [];
        ?>

        <form method="POST" action="data.php">
            <div class="mb-3">
                <input type="text" id="input" name="task" class="form-control" placeholder="Entrez une nouvelle tâche">
            </div>
            <button id="btn" type="submit" class="btn btn-primary mb-3">Ajouter une tâche</button>
        </form>        

        <ul class="list-group">
            <?php foreach ($tasks as $task): ?>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="task-text"><?= htmlspecialchars($task) ?></span>
                    <div class="button-container">
                        <button class="edit btn btn-warning btn-sm">Edit</button>
                        <button class="delete btn btn-danger btn-sm">Delete</button>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>             