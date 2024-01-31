import {wait} from "./helpers.js";

console.log("A");
wait(2_000).then(() => {
    // this runs when the wait(milliseconds) function has completed successfully
    console.log("B");
})
console.log("C");
