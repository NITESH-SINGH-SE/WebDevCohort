const cBtn = document.getElementById("clear-btn")
const sqrtBtn = document.getElementById("sqrt-btn")
const modBtn = document.getElementById("mod-btn")
const divBtn = document.getElementById("divide-btn")
const sevenBtn = document.getElementById("7-btn")
const eightBtn = document.getElementById("8-btn")
const nineBtn = document.getElementById("9-btn")
// const xBtn = document.getElementById()
const fourBtn = document.getElementById("4-btn")
const fiveBtn = document.getElementById("5-btn")
const sixBtn = document.getElementById("6-btn")
// const minusBtn = document.getElementById()
const oneBtn = document.getElementById("1-btn")
const twoBtn = document.getElementById("2-btn")
const threeBtn = document.getElementById("3-btn")
// const plusBtn = document.getElementById()
const acBtn = document.getElementById("AC-btn")
const zeroBtn = document.getElementById("0-btn")
// const dotBtn = document.getElementById()
// const equalBtn = document.getElementById()
const input = document.getElementById("input")



function addVal(val) {
    input.value += val
    console.log(input.value);
}

function clear() {
    str = input.value
    input.value = str.slice(0, str.length - 1)
    console.log(input.value);
}

function allClear() {
    input.value = ''
    console.log(input.value);
}

nineBtn.addEventListener('click', () => addVal(9))
eightBtn.addEventListener('click', () => addVal(8))
sevenBtn.addEventListener('click', () => addVal(7))
sixBtn.addEventListener('click', () => addVal(6))
fiveBtn.addEventListener('click', () => addVal(5))
fourBtn.addEventListener('click', () => addVal(4))
threeBtn.addEventListener('click', () => addVal(3))
twoBtn.addEventListener('click', () => addVal(2))
oneBtn.addEventListener('click', () => addVal(1))
zeroBtn.addEventListener('click', () => addVal(0))

sqrtBtn.addEventListener('click', () => addVal("√"))
modBtn.addEventListener('click', () => addVal('%'))
divBtn.addEventListener('click', () => addVal('÷'))


cBtn.addEventListener('click', clear)
acBtn.addEventListener('click', allClear)