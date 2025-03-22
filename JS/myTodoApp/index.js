let tasks = []

const inputTask = document.getElementById('input_task')
const addButton = document.getElementById('add_button')

addButton.addEventListener('click', function() {
    console.log("Button Clicked");
    tasks.push(inputTask.value)
    inputTask.value = ''
    listTasks()
})



function listTasks() {
    list = document.getElementById("tasks_list")
    // console.log(list.innerHTML);
    list.innerHTML = ''
    for (let i = 0; i < tasks.length; ++i) {
        list.innerHTML += `<li id= task_${i}>${tasks[i]}<button id= button_${i} onclick = deleteTask(${i})>X</button></li>`
    }
}

function deleteTask(id) {
    tasks = tasks.filter((element, index) => index != id)
    listTasks()
}