/**
 * @param {Object[]} user
 * @param {number} user.id
 * @param {boolean} user.isEU
 */
const showOrHideConsent = user => {
    const message = document.querySelector("#eu-consent")

    if (user.isEU) {
        message.style.display = "initial"
    } else {
        message.style.display = "none"
    }
}

// Sample usage - do not modify
showOrHideConsent({
    id: 1,
    isEU: false
});
showOrHideConsent({
    id: 2,
    isEU: true
});
