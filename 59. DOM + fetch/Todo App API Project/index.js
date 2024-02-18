// TODO
import FetchWrapper from "./fetch-wrapper.js"

const API = new FetchWrapper("https://api.learnjavascript.online/demo/")
const todoList = document.querySelector("#todos-list")

const showTodos = () => {
    API.get("todos").then(data => {
        data.todos.forEach(item => {
            todoList.insertAdjacentHTML("beforeend", `<li><div class="card">[${item.category}] ${item.title}</div></li>`)
        })
    })
}

showTodos()

const form = document.querySelector("#todo-form")
const todo = document.querySelector("#todo-title")
const cate = document.querySelector("#todo-category")

form.addEventListener("submit", event => {
    event.preventDefault()
    API.put("todos", {
        title: todo.value,
        category: cate.value
    }).then(data => {
        console.log(data)
        showTodos()
    })
})
