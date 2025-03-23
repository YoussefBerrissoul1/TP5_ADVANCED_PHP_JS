document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");

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


    let li = document.getElementsByClassName("list-group-item");
    let editBtn = document.getElementsByClassName("edit");
    let deleteBtn = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function () {
            console.log("Delete button clicked");
            let listItem = this.closest("li"); 
            console.log("Deleting item:", listItem);
            listItem.remove();
        });
    }

    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener("click", function () {
            console.log("Edit button clicked");
            let listItem = this.closest("li"); 
            let value = listItem.querySelector(".task-text").innerText.trim(); 
            console.log("Editing item with value:", value);
            input.value = value; 
        });
    }
});