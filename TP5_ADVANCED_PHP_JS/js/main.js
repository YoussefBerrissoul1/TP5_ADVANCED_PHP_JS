document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const searchInput = document.getElementById("searchInput");
    const sortBtn = document.getElementById("sortBtn");
    const hideTasks = document.getElementsByClassName("hideTask");
    const editBtns = document.getElementsByClassName("edit");
    let ascending = true;

    //  Validation champ vide
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
    });

    //  Gestion édition des tâches
    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener("click", function (event) {
            event.preventDefault();

            const taskText = editBtns[i].closest("li").querySelector(".task-text");

            if (editBtns[i].innerText === "Edit") {
                taskText.style.display = "none";
                hideTasks[i].style.display = "inline-block";
                editBtns[i].innerText = "Save";
                hideTasks[i].focus();
            } else {
                taskText.innerText = hideTasks[i].value;
                taskText.style.display = "inline";
                hideTasks[i].style.display = "none";
                editBtns[i].innerText = "Edit";
                editBtns[i].closest("form").submit();
            }
        });
    }

    //  Filtrage
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll(".list-group-item").forEach(item => {
            const text = item.querySelector(".task-text").textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });

    //  Tri alphabétique
    sortBtn.addEventListener("click", () => {
        const items = Array.from(document.querySelectorAll(".list-group-item"));
        items.sort((a, b) => {
            const textA = a.querySelector(".task-text").textContent.toLowerCase();
            const textB = b.querySelector(".task-text").textContent.toLowerCase();
            return ascending ? textA.localeCompare(textB) : textB.localeCompare(textA);
        });
        ascending = !ascending;
        const list = document.querySelector(".list-group");
        list.innerHTML = "";
        items.forEach(item => list.appendChild(item));
    });

    //  Gestion des cases cochées "termine"
    document.querySelectorAll(".mark-complete").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const id = this.dataset.id;
            fetch("./mvc/update_status.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `id=${id}&completed=${this.checked ? 1 : 0}`
            }).then(() => location.reload());
        });
    });
});
