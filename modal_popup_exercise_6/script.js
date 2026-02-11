const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.preventDefault();
        closeBtn.click();
        modalBtn.style.outline = "none";
    }
});

function openModal() {
    modal.style.display = "block";
    console.log(modal.style.display);
}

function closeModal() {
    console.log("Fire function");
    modal.style.display = "none";
    console.log(modal.style.display);
}