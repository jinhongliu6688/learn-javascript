import {data} from "./data.js";

// visualize one of the items in `data` (feel free to remove the next line)
console.log(data[0]);

// TODO: implement instant search
const list = document.querySelector("#results-list")
const inputForm = document.querySelector("#app-search")

data.forEach(item => {
    list.insertAdjacentHTML("afterbegin", `<li>${item.spacecraft}</li>`);
})

const search = document.querySelector("#app-search")
search.addEventListener("keyup", event => {
    if (inputForm.value === "") {
        data.forEach(item => {
            list.insertAdjacentHTML("afterbegin", `<li>${item.spacecraft}</li>`);
        })
    } else {
        list.innerHTML = ""
        const input_low = inputForm.value.toLowerCase().trim()
        console.log(input_low)
        data.forEach(item => {
            if (item.spacecraft.toLowerCase().includes(input_low)) {
                list.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`);
            }
        })
    }
})
