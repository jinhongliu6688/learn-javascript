// TODO: add 'success' class on #user-name when the user leaves the input and it has at least 6 characters otherwise add the class 'error'

const usernameInput = document.querySelector("#user-name")

usernameInput.addEventListener("blur", event => {
    if (event.currentTarget.value.length < 6) {
        event.currentTarget.classList.remove("success")
        event.currentTarget.classList.add("error")
    } else {
        event.currentTarget.classList.remove("error")
        event.currentTarget.classList.add("success")
    }
})
