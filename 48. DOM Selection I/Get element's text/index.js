/**
 * @param {string} cssSelector
 */
const getTextFromSelector = cssSelector => {
    const element = document.querySelector(cssSelector)
    if (element) {
        return element.textContent
    } else {
        return ""
    }
}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // ""
