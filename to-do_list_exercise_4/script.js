const button = document.getElementById("btn");
const input_task = document.getElementById("add-task");
const list_task = document.getElementById("to-do-list");

button.addEventListener('click', addTask);
list_task.addEventListener('change', completeTask);
list_task.addEventListener('click', removeTask);

let tasks = [];

loadTasks();

function addTask() {
    const task_value = input_task.value.trim();
    if (task_value === "") return;

    const task = {
        text: task_value,
        done: false
    };

    tasks.push(task);
    saveTasks();
    renderTask(task);

    input_task.value = ""; 
}

function completeTask(event) {
    if (!event.target.matches(".checkbox")) return;

    const li = event.target.closest(".list-item");
    // Array.from(list_task.children).indexOf(li);
    const index = [...list_task.children].indexOf(li);

    tasks[index].done = event.target.checked;
    saveTasks();

    li.querySelector(".task-text")
        .classList.toggle("completed", tasks[index].done);
}

function removeTask(event) {
    if (!event.target.matches(".btn-remove")) return;

    const li = event.target.closest(".list-item");
    const index = [...list_task.children].indexOf(li);

    tasks.splice(index, 1);
    saveTasks();

    li.remove();    
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const stored = localStorage.getItem("tasks");

    if (stored) {
        tasks = JSON.parse(stored);
        tasks.forEach(task => renderTask(task));
    }
}

function renderTask(task) {
    const li = document.createElement("li");

    li.className = "list-item";

    li.innerHTML = `
        <input type="checkbox" class="checkbox" ${task.done ? "checked" : ""}> 
        <span class="task-text ${task.done ? "completed" : ""}">${task.text}</span>
        <button class="btn-remove">Remove</button>
    `;

    list_task.appendChild(li);
}
