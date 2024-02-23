import {wait} from "./helpers.js";

const init = async () => {
    console.log("Hello World");
    await wait(1_000);
    console.log("Hello after 1 second");
}

// Sample usage - do not modify
console.log(init());
