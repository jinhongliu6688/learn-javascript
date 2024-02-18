// TODO
import FetchWrapper from "./fetch-wrapper.js"

const API = new FetchWrapper("https://api.learnjavascript.online/demo/")
const todoList = document.querySelector("#todos-list")

const showRecentTodos = () => {
    API.get("todos").then(data => {
        todoList.innerHTML = ""
        data.todos.forEach(item => {
            todoList.insertAdjacentHTML("beforeend", `<li><div class="card">[${item.category}] ${item.title}</div></li>`)
        })
    })
}

// showRecentTodos()

const form = document.querySelector("#todo-form")
const todo = document.querySelector("#todo-title")
const cate = document.querySelector("#todo-category")
const button = document.querySelector("#button-add")

form.addEventListener("submit", event => {
    event.preventDefault()

    button.setAttribute("disabled", "disabled");
    API.put("todos", {
        title: todo.value,
        category: cate.value
    })
    .then(data => {
        console.log(data)
        console.log(data.error)
        if (!data.error) {
            showRecentTodos()
        }
    })
    .finally(() => {
        button.removeAttribute("disabled");
    });
})

showRecentTodos()
