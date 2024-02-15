const init = () => {
    // TODO: fetch shopping list items and render <li> elements
    const list = document.querySelector("#shopping-list")
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            console.log(element.item)
            list.insertAdjacentHTML("beforeend", `<li>${element.item}</li>`)
        })
    })

}

// Sample usage - do not modify
init();
