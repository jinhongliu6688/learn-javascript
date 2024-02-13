const getUserName = () => {
    return document.querySelector("input#user-name").value
}

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", event => {
    event.preventDefault();
    console.log(getUserName());
});
