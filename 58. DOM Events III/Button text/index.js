// TODO: log the button's textContent when it's clicked but only once

const button = document.querySelector("#my-button")

button.addEventListener("click", () => {
    console.log(button.textContent)
}, {
    once: true
})
