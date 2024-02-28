import {fakeFetch} from "./helpers.js";

const logUserDetails = async () => {
    // TODO using async/await
    try {
        const response = await fakeFetch("user-details")
        const data = await response.json()
        return data
    } catch (error) {
            console.error(error)
    }
}

// Sample usage (do not modify)
logUserDetails();
