// TODO: implement tabs

const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        // disable the old one
        const old = document.querySelector(".tab.active")
        old.classList.remove("active")
        document.querySelector(old.dataset.content).classList.remove("show")

        //activate the new one
        event.currentTarget.classList.add("active")
        document.querySelector(event.currentTarget.dataset.content).classList.add("show")
    })
})
