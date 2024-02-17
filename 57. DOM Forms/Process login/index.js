// TODO: call processLogin with the user provided email and password when the form is submitted

const form = document.querySelector("#login-form")
const email = document.querySelector("#login-email")
const password = document.querySelector("#login-password")

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log(email.value)
    console.log(password.value)
    processLogin(email.value, password.value)
})

// Do not modify this function
function processLogin(email, password) {}
