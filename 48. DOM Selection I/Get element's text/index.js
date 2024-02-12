/**
 * @param {string} cssSelector
 */
const getTextFromSelector = cssSelector => {
    const text = document.querySelector(cssSelector)
    if (text) {
        return text.textContent
    } else {
        return ""
    }
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // ""
