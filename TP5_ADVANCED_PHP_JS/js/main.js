document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");

    // Validation du champ input avant soumission
    btn.addEventListener("click", (event) => {
        if (input.value.trim() === "") {
            input.style.border = "1px solid red";
            event.preventDefault();
        } else {
            input.style.border = "";
        }
    });

    input.addEventListener("keypress", () => {
        input.style.border = "";
        input.style.color = "";
    });

    // Gestion de l'affichage des champs de modification
    let hideTasks = document.getElementsByClassName("hideTask");
    let editBtns = document.getElementsByClassName("edit");

    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener("click", (event) => {
            event.preventDefault(); // Empêche la soumission immédiate du formulaire

            // Cacher le texte de la tâche
            let taskText = editBtns[i].closest("li").querySelector(".task-text");
            taskText.style.display = "none"; // Cache le texte de la tâche

            // Modifier le texte du bouton "Edit" en "Save"
            editBtns[i].innerText = "Save"; 

            // Afficher l'input caché pour permettre l'édition
            hideTasks[i].style.display = "inline-block"; 

            // Focaliser l'input pour commencer à modifier
            hideTasks[i].focus();

            // Gérer la soumission de la tâche modifiée
            editBtns[i].addEventListener("click", (event) => {
                event.preventDefault(); // Empêche la soumission immédiate du formulaire

                // Récupérer la nouvelle valeur de la tâche
                let updatedTask = hideTasks[i].value;

                // Mettre à jour le texte de la tâche
                taskText.innerText = updatedTask;
                taskText.style.display = "inline"; // Réafficher le texte de la tâche

                // Cacher l'input et remettre le bouton à "Edit"
                hideTasks[i].style.display = "none"; 
                editBtns[i].innerText = "Edit"; 

                // Soumettre le formulaire pour enregistrer la modification (exemple avec un formulaire classique)
                editBtns[i].closest("form").submit();
            });
        });
    }
});
