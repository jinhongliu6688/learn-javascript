// TODO
import FetchWrapper from "./fetch-wrapper.js"

const cities = document.querySelector("#cities-dropdown")
const weatherResult = document.querySelector("#weather-result")

cities.addEventListener("change", event => {
    const city = event.currentTarget.value
    const API = new FetchWrapper(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app`)
    API.get(`/weatherstack/${city}.json`).then(data => {
        console.log(data.current.temperature)
        weatherResult.textContent = `It's ${data.current.temperature} degrees celsius.`
    })
})
