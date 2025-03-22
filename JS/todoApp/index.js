const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoItemsContainer = document.getElementById('todo-items-container')

addBtn.addEventListener('click', () => {
    const value = todoInput.value

    const li = document.createElement('li')
    li.innerText = value
    console.log(li);

    const delButton = document.createElement('button')
    delButton.innerText = 'X'

    li.appendChild(delButton)

    delButton.addEventListener('click', function() {
        li.remove()
    })

    todoItemsContainer.appendChild(li)
    todoInput.value = ''
})