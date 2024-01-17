/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
    console.log(countries);
    let result = `<option value="">Please select</option>`
    result += countries.map(country => {
        return `<option value="${country.toLowerCase()}">${country}</option>`
    }).join("")
    console.log(result)
    return result
}
