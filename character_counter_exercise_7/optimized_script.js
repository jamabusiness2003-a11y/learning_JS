const textarea = document.getElementById("textarea");
const counterText = document.getElementById("counterText");

const maxCounts = 100;
let count = 0;

textarea.addEventListener("input", () => {
    

    count++;

    counterText.textContent = `Words: ${count}`;

    if (count === maxCounts) {
        counterText.classList.add("warning");
        textarea.disabled = true;
    } else {
        counterText.classList.remove("warning");
    }
});
