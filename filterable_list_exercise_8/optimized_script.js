const searchBar = document.getElementById("search");
const listItems = document.getElementById("list-items");
const items = [...listItems.querySelectorAll("li")];

searchBar.addEventListener("input", () => {
    const query = searchBar.value.trim().toUpperCase();
    const isEmpty = query === "";

    items.forEach(item => {
        const text = item.textContent.toUpperCase();
        const match = !isEmpty && text.includes(query);

        item.classList.toggle("match", match);
        item.style.display = isEmpty || match ? "" : "none";
    });
});