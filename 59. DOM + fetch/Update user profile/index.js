// TODO
import FetchWrapper from "./fetch-wrapper.js"

const nameForm = document.querySelector("#user-form")
const firstName = document.querySelector("#first-name")
const lastName  = document.querySelector("#last-name")
const API = new FetchWrapper("https://api.learnjavascript.online/demo/")

nameForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log(firstName.value)
    console.log(lastName.value)
    API.put("user.json", {
        firstName: firstName.value, 
        lastName: lastName.value
    }).then(data => {
        console.log(data)
    })
})
