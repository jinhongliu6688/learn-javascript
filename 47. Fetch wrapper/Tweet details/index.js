import FetchWrapper from "./fetch-wrapper"

const getTweetDetails = () => {
    // TODO
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")
    API.get("/tweet/1080777336298049537.json").then(data => {
        console.log(data)
        showAuthorName(data.author.details.firstName + " " + data.author.details.lastName)
    })
}


// do NOT modify this function
function showAuthorName(fullName) {
    console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();
