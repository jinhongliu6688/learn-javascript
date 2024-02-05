const checkForNewNotifications = () => {
    return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
        .then(response => {
            return response.json()
        })
}


// Sample usage - do not modify
checkForNewNotifications();
