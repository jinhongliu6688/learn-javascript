const button = document.querySelector("#my-button")

const initClickGreeting = () => {
    console.log("Welcome!");
}

button.addEventListener("click", () => {
    initClickGreeting()
})

// Sample usage - do not modify
initClickGreeting();
