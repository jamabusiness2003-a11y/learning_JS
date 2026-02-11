const searchBar = document.getElementById("search");
const listItems = document.getElementById("list-items");

searchBar.addEventListener("input", (e) => {
    const inputValue = e.target.value.toUpperCase();
    const allItems = listItems.querySelectorAll("li");

    allItems.forEach(item => {
        const textValue = item.textContent || item.innerText;

        if (inputValue === "") {
            item.classList.remove("match");
            item.style.display = "";
            return;
        }

        if (textValue.toUpperCase().indexOf(inputValue) > -1) {
            item.classList.add("match");
            item.style.display = "";
        } else {
            item.classList.remove("match");
            item.style.display = "none";
        }
  
    });
});