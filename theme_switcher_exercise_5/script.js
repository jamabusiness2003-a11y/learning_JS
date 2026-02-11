const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

const lightTheme = "light-theme";
const darkTheme = "dark-theme";

let savedtheme = loadTheme();

if (savedtheme) {
    renderTheme(savedtheme)
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains(darkTheme);
    
    const newTheme = isDark ? lightTheme : darkTheme;
    /* let newTheme;
    if (isDark) {
        newTheme = lightTheme;
    } else {
        newTheme = darkTheme;
    } */

   /*  body.classList.toggle(darkTheme, !isDark);
    console.log(`Themes: ${darkTheme}  IsDark: ${!isDark}`);
    body.classList.toggle(lightTheme, isDark);
    console.log(`Themes: ${lightTheme}  IsDark: ${isDark}`); */

    renderTheme(newTheme)
    
    saveTheme(newTheme);
});


function saveTheme(theme) {
    localStorage.setItem("themes", theme);
}

function loadTheme() {
    return localStorage.getItem("themes");
}

function renderTheme(theme) {
    body.className = theme;
}

