import {waitForCompleteClick} from "./helpers.js";

waitForCompleteClick()
.then(() => {
    console.log("Complete clicked")
})
.catch(error => {
    console.error("Fail clicked")
})
