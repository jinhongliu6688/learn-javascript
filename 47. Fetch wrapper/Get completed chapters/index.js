import FetchWrapper from "./fetch-wrapper.js"

const getChapters = () => {
    // TODO
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")
    API.get("/chapters/all.json").then(data => {
        console.log(data)
        displayCompletedChapters(data.filter(chapter => {
            if (chapter.isCompleted === true) {
                return chapter
            }
        }))
    })
}

// do NOT modify this function
function displayCompletedChapters(chapters) {
    console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();
