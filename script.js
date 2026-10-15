
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    let taskSpan = document.createElement("span");

    taskSpan.textContent = taskText;
    taskSpan.onclick = function () {
        completeTask(taskSpan);
    };

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        editTask(taskSpan);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function editTask(task) {
    let newTask = prompt("Edit your task:", task.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        task.textContent = newTask.trim();
    }
}

function deleteTask(task) {
    task.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}

