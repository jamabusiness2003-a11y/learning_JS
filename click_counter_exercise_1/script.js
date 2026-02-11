const button = document.getElementById("btn");
let counter = 0;

function increaseCounter() {
    counter += 1;
    document.getElementById("count").innerHTML = counter;
    if (counter === 10) {
        document.getElementById("heading").style.color = "#3f65";
    }
}

button.addEventListener('click', increaseCounter);