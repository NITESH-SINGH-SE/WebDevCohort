let count = 0
const result = document.getElementById('result')
const addBtn = document.getElementById('add-btn')
const subBtn = document.getElementById('sub-btn')

function add() {
    count++
    updateCount()
}

function subtract() {
    count--
    updateCount()
}

function updateCount() {
    console.log(count);
    result.innerText = `Count: ${count}`
}

addBtn.addEventListener('click', add)
subBtn.addEventListener('click', subtract)