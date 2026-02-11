const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Close when clicking backdrop (not modal content)
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isModalOpen()) {
        closeModal();
        modalBtn.blur();
    }
});

/* ---------- Logic ---------- */

function openModal() {
    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
}

function isModalOpen() {
    return modal.classList.contains("open");
}
