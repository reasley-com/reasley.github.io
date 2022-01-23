const loginForm   = document.querySelector("#loginForm")
const loginInput  = document.querySelector("#loginInput")
const loginButton = document.querySelector("#loginButton")
const userNotice = document.querySelector('#userNotice')

const savedLocalStorage = localStorage.getItem("userSubmit");

const time = new Date()
const hour = time.getHours()

function handleLoginSubmit(event) {
    event.preventDefault()
    const userSubmit = loginInput.value
    savedLocalStorage.setItem("userSubmit", userSubmit)
    hidden()
    paintuserNotice(userSubmit)
}

function paintuserNotice(userSubmit) {
    showTodoInput()
    userNotice.innerText = `Hello, ${userSubmit}!`
}

function hidden() {
    loginInput.classList.add('hidden')
    loginButton.classList.add('hidden')
}

function showTodoInput() {
    todoInput.classList.remove('hidden');
}
if(savedLocalStorage === null) { loginForm.addEventListener('submit', handleLoginSubmit) }
else {
    loginInput.classList.add('hidden')
    loginButton.classList.add('hidden')
    paintuserNotice(savedLocalStorage)
}