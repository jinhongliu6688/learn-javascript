import {init, toggleModal} from "./attendees.js";

// this function adds an event listener on the + button which then opens the modal
init();

// TODO open modal on 'n' when it's closed and close it on 'Escape' when it's open
const modal = document.querySelector("#app-modal")
const page = document.documentElement

page.addEventListener("keyup", event => {
    console.log(event.key)
    if (event.key === "n" && !(modal.classList.contains("show"))) {
        toggleModal()
    } else if (event.key === "Escape" && modal.classList.contains("show")) {
        toggleModal()
    }
})
