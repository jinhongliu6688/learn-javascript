// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

const button = document.querySelector("#theme-btn")

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
})
