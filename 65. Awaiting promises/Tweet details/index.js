const getTweetDetails = async () => {
    // TODO using async/await
    const response = await fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/tweet/1080777336298049537.json")
    const data = await response.json()
    console.log(data)
    showAuthorName(`${data.author.details.firstName} ${data.author.details.lastName}`)
}


// do NOT modify this function
function showAuthorName(fullName) {
    console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();
