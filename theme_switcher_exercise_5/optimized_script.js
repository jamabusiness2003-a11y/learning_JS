const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

const THEMES = {
    LIGHT: "light-theme",
    DARK: "dark-theme"
};

const STORAGE_KEY = "theme";

/* Init */

const savedTheme = localStorage.getItem(STORAGE_KEY) || THEMES.LIGHT;

applyTheme(savedTheme);

toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    const newTheme = body.classList.contains(THEMES.DARK)
        ? THEMES.LIGHT
        : THEMES.DARK;

    applyTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
}

function applyTheme(theme) {
    body.classList.remove(THEMES.LIGHT, THEMES.DARK);
    body.classList.add(theme);
}