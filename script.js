// Load tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    
    if (task === "") return alert("Please enter a task!");
    
    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent.trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!storedTasks) return;

    let taskList = document.getElementById("taskList");

    storedTasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
}
