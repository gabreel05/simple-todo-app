var listElement = document.querySelector('ul')
var inputTitleElement = document.querySelector('#title')
var inputDescriptionElement = document.querySelector('#description')
var buttonElement = document.querySelector('button')

var todos = []

function handleToDo() {
  listElement.innerHTML = ''

  for (const todo of todos) {
    var todoElement = document.createElement('li')
    var listTitle = document.createElement('strong')
    var listDescription = document.createElement('p')

    var todoTitle = document.createTextNode(todo.title)
    var todoDescription = document.createTextNode(todo.description)

    listTitle.appendChild(todoTitle)
    listDescription.appendChild(todoDescription)

    todoElement.appendChild(listTitle)
    todoElement.appendChild(listDescription)

    listElement.appendChild(todoElement)
  }
}

function addToDo() {
  var todoTextTitle = inputTitleElement.value
  var todoTextDescription = inputDescriptionElement.value

  todos.push({
    title: todoTextTitle,
    description: todoTextDescription,
  })

  inputTitleElement.value = ''
  inputDescriptionElement.value = ''
  handleToDo()
}

buttonElement.onclick = addToDo
