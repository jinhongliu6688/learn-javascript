const logLinksTexts = () => {
    document.querySelectorAll("a").forEach(element => {
        console.log(element.textContent)
    })
}

// Sample usage - do not modify
logLinksTexts();
