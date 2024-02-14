/**
 * @param {HTMLLIElement} li
 */
export const handleItemClick = li => {
    console.log(li)
    li.classList.toggle("highlighted")
}
