const getShortTextParagraphs = () => {
    return [...document.querySelectorAll("p")].filter(item => {
        return item.textContent.length < 10
    })
}

// Sample usage - do not modify
console.log(getShortTextParagraphs());
