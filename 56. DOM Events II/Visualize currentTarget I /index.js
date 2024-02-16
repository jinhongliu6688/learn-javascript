const button = document.querySelector("#my-button");

button.addEventListener("click", event => {
    console.log(event.currentTarget);
});
