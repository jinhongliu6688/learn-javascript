import {wait} from "./helpers.js";

const init = async () => {
    console.log("A");
    await wait(1_000);
    console.log("B");
    await wait(1_000);
    console.log("C");
}

// Sample usage - do not modify
init();
