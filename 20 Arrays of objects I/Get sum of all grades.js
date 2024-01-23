/**
 * @param {Object[]} grades
 * @param {string} grades.date
 * @param {number} grades.grade
 */
const getSumOfGrades = results => {
    return results.reduce((total, current) => {
        return total + current.grade
    }, 0)
};

// Sample usage - do not modify
const results = [{
    date: "2018-12-13",
    grade: 14
}, {
    date: "2018-12-15",
    grade: 18
}]
console.log(getSumOfGrades(results)); // 32


/**
 * @param {Object[]} grades
 * @param {string} grades.date
 * @param {number} grades.grade
 */
const getSumOfGrades = results => {
    let sum = 0
    results.forEach(result => {
        sum += result.grade
    })
    return sum
};

// Sample usage - do not modify
const results = [{
    date: "2018-12-13",
    grade: 14
}, {
    date: "2018-12-15",
    grade: 18
}]
console.log(getSumOfGrades(results)); // 32
