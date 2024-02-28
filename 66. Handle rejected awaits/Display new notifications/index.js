import FetchWrapper from "./fetch-wrapper.js"

const checkForNewNotifications = async () => {
    // TODO using async/await + handle errors
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")
    try {
        const data = await API.get("/notifications/new.json")
        showNewNotifications(data.count)
    } catch(error) {
        console.error(error)
        showNewNotifications()
    }
}


// do NOT modify this function
function showNewNotifications(count) {
    if (!count) {
        console.log("We could not load your notifications. Try again later.");
        return;
    }
    console.log(`You have ${count} new notifications. Would you like to read them?`);
}

// Sample usage - do not modify
checkForNewNotifications();
