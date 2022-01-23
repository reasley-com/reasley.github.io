const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginInput")
const loginButton = document.querySelector("#loginButton")
const greeting = document.querySelector("#userNotice")

const savedLocalStorage = localStorage.getItem("userSubmit")

const time = new Date()
const hour = time.getHours()

const HIDDEN_KEY = "hidden"

function handleLoginSubmit(event) {
    event.preventDefault()
    const userSubmit = loginInput.value
    localStorage.setItem("userSubmit", userSubmit)
    greeting.innerText = `Hello, ${userSubmit}!`
    hidden()
    showing()
}

function showing() {
    greeting.classList.remove('hidden')
    todoInput.classList.remove('hidden')
}

function hidden() {
    loginInput.classList.add('hidden')
    loginButton.classList.add('hidden')
}

if(savedLocalStorage === null) {
    loginForm.addEventListener("submit", handleLoginSubmit)
} else {
    hidden()
    paintGreeting(savedLocalStorage)
}