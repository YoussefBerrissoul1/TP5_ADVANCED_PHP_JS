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
        let deleteBtns = document.getElementsByClassName("delete");
        for (let i = 0; i < editBtns.length; i++) {
            editBtns[i].addEventListener("click", (event) => {
                event.preventDefault();

                let taskText = editBtns[i].closest("li").querySelector(".task-text");
                let deleteText = deleteBtns[i].closest("li").querySelector(".task-text");
                taskText.style.display = "none";
                editBtns.innerText = "Save";  
                hideTasks[i].style.display = "inline-block"; 

                hideTasks[i].focus();
            });
        }
    });
