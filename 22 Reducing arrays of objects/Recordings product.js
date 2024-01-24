/**
 * @param {Object[]} recordings
 * @param {number} recordings.value
 */
const getProduct = recordings => {
    return recordings.reduce((total, current) => {
        return total * current.value
    }, 1)
}

// Sample usage - do not modify
const sampleRecordings = [{
    value: 2,
}, {
    value: 5
}];
console.log(getProduct(sampleRecordings)); // 10
