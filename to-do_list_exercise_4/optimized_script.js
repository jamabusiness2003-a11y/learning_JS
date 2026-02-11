const button = document.getElementById("btn");
const inputTask = document.getElementById("add-task");
const listTask = document.getElementById("to-do-list");

let tasks = loadTasks();

button.addEventListener("click", addTask);
listTask.addEventListener("click", handleListClick);
listTask.addEventListener("change", handleListChange);

renderTasks();

/* Core Logic */

function addTask() {
    const text = inputTask.value.trim();
    if (!text) return;

    tasks.push({text, done: false});
    saveTasks();
    renderTasks();

    inputTask.value = "";
}

function handleListChange(e) {
    if (!e.target.classList.contains("checkbox")) return;

    const index = e.target.closest(".list-item").dataset.index;
    tasks[index].done = e.target.checked;

    saveTasks();
    renderTasks();
}

function handleListClick(e) {
    if (!e.target.classList.contains("btn-remove")) return;

    const index = e.target.closest(".list-item").dataset.index;
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

/* Rendering */

function renderTasks() {
    listTask.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-item";
        li.dataset.index = index;

        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.done ? "checked" : ""}>
            <span class="task-text ${task.done ? "completed" : ""}">
                ${task.text}
            </span>
            <button class="btn-remove">Remove</button>
        `;

        listTask.appendChild(li);
    });
}

/* Storage */

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}