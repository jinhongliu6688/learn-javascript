/**
 * @param {HTMLElement} element
 */
const getUserIdFromElement = element => {
    return Number.parseInt(element.closest(".user-card").dataset.userId, 10)
}

// Sample usage - do not modify
console.log(getUserIdFromElement(document.querySelector("#name"))); // 23
console.log(getUserIdFromElement(document.querySelector("#description"))); // 23
