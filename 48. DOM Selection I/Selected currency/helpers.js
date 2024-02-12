export const getSelectedCurrency = () => {
    const text = document.querySelector(".card.active")
    return text.textContent
}
