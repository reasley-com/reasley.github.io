const todoForm    = document.querySelector("#todoForm")
const todoInput   = document.querySelector("#todoInput")
const todoContent = document.querySelector("#todoContent")

let todoList    = []
let isSavedTodo = false
const savedTodo = localStorage.getItem("todo")

todoForm.addEventListener('submit', handleTodoSubmit);

function handleTodoSubmit(event) {
    event.preventDefault()
    const todoObj = { text: todoInput.value, id: Date.now() }
    todoList.push(todoObj)
    paintTodo(todoObj)
    todoInputReset()
    saveTodo()
}

function todoInputReset(){ todoInput.value = "" }
function saveTodo() { localStorage.setItem("todo", JSON.stringify(todoList)) }

function paintTodo(todoObj){
    const todoFrame      = document.createElement('div')
    todoFrame.className  = 'todoFrame grid'
    todoFrame.id         = todoObj.id

    const todoBody       = document.createElement('span')
    todoBody.className   = 'todoBody'
    todoBody.innerText   = todoObj.text

    const todoButton     = document.createElement('button')
    todoButton.className = 'todoButton'
    todoButton.innerText = '⨉'
    todoButton.addEventListener('click', removeTodo);

    todoFrame.appendChild(todoBody)
    todoFrame.appendChild(todoButton)
    todoContent.appendChild(todoFrame)
}

function removeTodo(event){
    let parent = event.target.parentElement
    console.log(parent.id)
    todoList = todoList.filter((todo) => todo.id !== parseInt(parent.id) )
    saveTodo()
    parent.remove()
}

if( savedTodo !== null ) {
    isSavedTodo = true;
    const parsedTodos = JSON.parse(savedTodo);
    todoList = parsedTodos;
    parsedTodos.forEach(paintTodo);
    isSavedTodo = false;
}
