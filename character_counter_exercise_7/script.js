const textarea = document.getElementById("textarea");
const counterText = document.getElementById("counterText");

let counter = 0;

textarea.addEventListener("input", () => {
    counter++;
    counterText.textContent = `Words : ${counter}`;
    if (counter === 100) {
        counterText.classList.add("warning");
        textarea.disabled = true;
    }
})