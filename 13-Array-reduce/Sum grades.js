let grades = [10, 5, 15, 20]

// calculate the sum of these grades
const sum = grades.reduce((total, current) => {
    return total + current
}, 0)
