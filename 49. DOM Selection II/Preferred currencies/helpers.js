export const getSelectedCurrencies = () => {
    return [...document.querySelectorAll(".cards .card.active")].map(item => {
        return item.textContent
    })
}
