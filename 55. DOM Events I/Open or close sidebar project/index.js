// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

const button = document.querySelector("#menu-sidebar")

button.addEventListener("click", () => {
    document.querySelector("#app-sidebar").classList.toggle("show")
})
