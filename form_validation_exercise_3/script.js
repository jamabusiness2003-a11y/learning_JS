const form = document.getElementById("form");
const errorUsername = document.getElementById("error-username");
const errorEmail = document.getElementById("error-email");
const logSuccess = document.getElementById("log-success");

const email = document.getElementById("email");
const username = document.getElementById("username");

form.addEventListener('submit', (event) => {


    if (username.value === "" && email.value === ""){
        event.preventDefault();
        errorEmail.textContent = "Empty Feild";
        errorUsername.textContent = "Empty Feild";
    } else {
        logSuccess.textContent = "Success";
    }
});





