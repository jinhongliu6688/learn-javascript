import {welcomeUser} from "./helpers.js";

/**
 * @param {string} name
 */
const sayHello = (name) => {
    welcomeUser(name, () => console.log("Done!"))
}

// Sample usage - do not modify
sayHello("Sam");
