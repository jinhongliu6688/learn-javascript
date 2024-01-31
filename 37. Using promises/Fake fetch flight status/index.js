import {fakeFetch} from "./helpers.js";

const logFlightStatus = () => {
    fakeFetch("flight-status").then(value => {
        console.log(value)
    })
}

// Sample usage (do not modify)
logFlightStatus();
