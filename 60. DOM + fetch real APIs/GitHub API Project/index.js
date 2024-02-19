// TODO
import FetchWrapper from "./fetch-wrapper.js"
import {startLoader, stopLoader} from "./helpers.js"

const form = document.querySelector("#repos-form")
const username = document.querySelector("#github-username")
const API = new FetchWrapper("https://api.github.com/")
const list = document.querySelector("#repos-list")
const button = document.querySelector("#get-repos")

form.addEventListener("submit", event => {
    startLoader(button)
    API.get(`users/${username.value}/repos`)
    .then(data => {
        list.innerHTML = ""
        data.forEach(repo => {
            list.insertAdjacentHTML("beforeend", 
                `<li>
                    <a href="${repo.html_url}" target="_blank">
                        <h2>${repo.full_name}</h2>
                        <p>${repo.description}</p>
                    </a>
                </li>`
            )
        })
    })
    .finally(() => {
        stopLoader(button, "Get repos")
    })
})
