/**
 * @param {Object} course
 * @param {number} course.id
 * @param {string} course.name
 * @param {number} course.year
 * @param {string} detail
 */
const getCourseDetail = (course, detail) => {
    return `The course ${detail} is ${course[detail]}`
}


// Sample usage - do not modify
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name")); // "The course name is Learn JavaScript"
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year")); // "The course year is 2021"
