const heightInput = document.getElementById('height-input')
const weightInput = document.getElementById('weight-input')
const calculateBtn = document.getElementById("calculate-btn")
const result = document.getElementById("result")

calculateBtn.addEventListener('click', () => {
    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    const bmi = calculateBMI(height, weight).toFixed(2)
    result.innerText = `Your BMI is: ${bmi}`

    heightInput.value = ''
    weightInput.value = ''
})

function calculateBMI(height, weight) {
    return weight/(height*height)
}
