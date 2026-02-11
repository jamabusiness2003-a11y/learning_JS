const form = document.getElementById("form");
const errorUsername = document.getElementById("error-username");
const errorEmail = document.getElementById("error-email");
const logSuccess = document.getElementById("log-success");

const email = document.getElementById("email");
const username = document.getElementById("username");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset messages
    errorUsername.textContent = "";
    errorEmail.textContent = "";
    logSuccess.textContent = "";

    let isValid = true;

    if (!username.value.trim()) {
        errorUsername.textContent = "Empty field";
        isValid = false;
    }

    if (!email.value.trim()) {
        errorEmail.textContent = "Empty field";
        isValid = false;
    }

    if (isValid) {
        logSuccess.textContent = "Success";
    }
});
