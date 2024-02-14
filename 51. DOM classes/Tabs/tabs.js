export const deactivateAllTabs = () => {
    document.querySelectorAll(".tab").forEach(item => {
        item.classList.remove("active")
    })
}

/**
 * @param {HTMLElement} tab
 */
export const activateClickedTab = tab => {
    console.log(tab)
    tab.classList.add("active")
}
