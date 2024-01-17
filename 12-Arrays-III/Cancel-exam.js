/**
 * @param {number[]} grades
 */
const shouldCancelExam = grades => {
    return grades.every(grade => grade >= 18)
}


// Sample usage - do not modify
console.log(shouldCancelExam([10, 12, 10, 14])); // false
console.log(shouldCancelExam([18, 4])); // false
console.log(shouldCancelExam([19, 18, 18])); // true
