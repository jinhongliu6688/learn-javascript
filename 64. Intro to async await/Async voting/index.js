/**
 * @param {number} age
 */
const canVote = async age => {
    return new Promise(resolve => {
        resolve(age >= 18);
    });
}

// Sample usage - do not modify
canVote(20).then(result => {
    console.log(result); // true
});
canVote(15).then(result => {
    console.log(result); // false
});
