// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.

const buttons = document.querySelectorAll(".cards .card")

let active_button = undefined

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (active_button) {
            active_button.classList.toggle("active")
        }
        event.currentTarget.classList.toggle("active")
        active_button = event.currentTarget
    })
})
