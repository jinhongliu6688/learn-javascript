/**
 * @param {string} url
 * @param {string} className
 */
const createAvatar = (url, className) => {
    const img = document.createElement("img")
    img.classList.add(className)
    img.setAttribute("src", url) // or img.src = url
    return img
}

// Sample usage - do not modify
console.log(createAvatar("/avatar/person.png", "circle")); // <img src="/avatar/person.png" class="circle"> (as an element not a string)
console.log(createAvatar("/avatar/user.png", "rounded")); // <img src="/avatar/user.png" class="rounded"> (as an element not a string)
