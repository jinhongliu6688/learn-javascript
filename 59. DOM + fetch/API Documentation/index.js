// // TODO
import FetchWrapper from "./fetch-wrapper.js"

const gradeForm = document.querySelector("#grades-form")
const API = new FetchWrapper("https://api.learnjavascript.online/demo/")
const gradeInput = document.querySelector("#user-grade")

console.log(gradeInput.value)

gradeForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log(gradeInput.value)
    API.post("grades.json", {
        grade: gradeInput.value
    }).then(data => {
        console.log(data)
    })
})



