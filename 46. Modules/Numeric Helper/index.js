import NumericHelper from "./numeric-helper.js"

/**
 * @param {number} number
 */
const isEvenNumber = number => {
    // Use NumericHelper's isEven method to check if it's even
    return new NumericHelper(number).isEven()
}

// Sample usage - do not modify
console.log(isEvenNumber(2)); // true
console.log(isEvenNumber(3)); // false
