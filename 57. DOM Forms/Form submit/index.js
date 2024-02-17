// TODO: make the console log below show up only when the form is submitted

const form = document.querySelector("#login-form")

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("form submitted")
})

