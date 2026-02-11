const button = document.getElementById("btn");
const input = document.getElementById("password");

button.addEventListener("click", () => {
    let inputType = input.getAttribute("type");
    let text = inputType.replace("password", "text");
    let password = inputType.replace("text", "password");

    if (input.type === text) {
        input.type = password;  
        console.log(password);
        button.innerHTML = "Show";
    } else {
        input.type = text;
        console.log(text);
        button.innerHTML = "Hide";
    }
    
});