// TODO: toggle the class active on any of the buttons whenever they get clicked

const buttons = document.querySelectorAll(".button")

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active")
    })
})
