const button = document.getElementById("btn");
const countEl = document.getElementById("count");
const headingEl = document.getElementById("heading");

let counter = 0;

button.addEventListener('click', () => {
    counter++;
    countEl.textContent = counter;

    if (counter === 10) {
        headingEl.style.color = "#3f65";
    }
});