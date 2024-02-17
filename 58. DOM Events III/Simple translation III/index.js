// TODO: Update output when the user selects a new language

import {getTranslation} from "./helpers.js"

const languageList = document.querySelector("#languages-list")
const outputText = document.querySelector("#output-text")

languageList.addEventListener("change", event => {
    console.log(event.currentTarget.value)
    outputText.textContent = getTranslation(event.currentTarget.value)
})
