/**
 * @param {string} item
 */
const addItemToShoppingList = item => {
    const list = document.querySelector("#shopping-list")
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
}

// Sample usage - do not modify
addItemToShoppingList("Paper"); // adds <li>Paper</li>
addItemToShoppingList("Orange"); // adds <li>Orange</li>
addItemToShoppingList("Peach"); // adds <li>Peach</li>
