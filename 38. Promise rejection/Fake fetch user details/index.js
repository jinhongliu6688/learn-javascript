import {fakeFetch} from "./helpers.js";

const logUserDetails = () => {
    fakeFetch("user-details")
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.error(error)
    })
}

// Sample usage (do not modify)
logUserDetails();
