todoInput = document.getElementById('todo-input')
addBtn = document.getElementById('add-btn')
todoList = document.getElementById('todo-list')

addBtn.addEventListener('click', () => {
    // console.log(todoInput.value);
    const value = todoInput.value
    addTaskInList(value)
    todoInput.value = ''
})

function addTaskInList(value) {
    console.log(value);
    
    const li = document.createElement('li')
    li.innerText = value

    const btn = document.createElement('button')
    btn.innerText = 'X'

    btn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(btn)
    
    todoList.appendChild(li)
}