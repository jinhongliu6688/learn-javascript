// TODO
import FetchWrapper from "./fetch-wrapper.js"

const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/01a61449ba141825dbe3a0f1/latest/")

const base = document.querySelector("#base-currency")
const target = document.querySelector("#target-currency")
const result = document.querySelector("#conversion-result")

const get_conversion = () => {
    API.get(`${base.value}`)
    .then(data => {
        result.innerHTML = data.conversion_rates[target.value]
    })
}

base.addEventListener("change", () => get_conversion())
target.addEventListener("change", () => get_conversion())
