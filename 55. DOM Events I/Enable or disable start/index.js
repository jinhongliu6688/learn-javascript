// TODO: Clicking on 'Disable start' should disable the 'Start' button and clicking on 'Enable start' should enable the 'Start' button.

const d_button = document.querySelector("#btn-disable")
const e_button = document.querySelector("#btn-enable")
const s_button = document.querySelector("#btn-start")

d_button.addEventListener("click", () => {
    s_button.setAttribute("disabled", "disabled")
})

e_button.addEventListener("click", () => {
    s_button.removeAttribute("disabled")
})
