// TODO: When the user clicks on a `.card``, it should add/remove the class `active`

const buttons = document.querySelectorAll(".cards .card")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active")
    })
})
