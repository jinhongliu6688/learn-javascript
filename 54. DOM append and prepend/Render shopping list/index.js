/**
 * @param {string[]} items
 */
const renderShoppingList = items => {
    const list = document.querySelector("#shopping-list")
    items.forEach(item => {
        list.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    })
}

// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
renderShoppingList(sampleList);
