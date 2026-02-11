const button = document.getElementById("btn");
const input = document.getElementById("password");

button.addEventListener("click", () => {
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";

    button.textContent = isPassword ? "Hide" : "Show";
});