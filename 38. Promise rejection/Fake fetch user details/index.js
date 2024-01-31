import {fakeFetch} from "./helpers.js";

const logUserDetails = () => {
    fakeFetch("user-details").catch(error => {
        console.error(error)
    })
}

// Sample usage (do not modify)
logUserDetails();
