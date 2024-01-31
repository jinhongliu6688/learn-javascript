import {wait} from "./helpers.js";

const init = () => {
    console.log("Program started");
    wait(1_000).then(() => console.log("Waited 1 second"))
}

// Sample usage (do not modify)
init();
