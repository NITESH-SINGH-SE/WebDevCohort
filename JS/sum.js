let myArr = [1, 2, 3, 4, 5]


function findSum(arr) {
    let sum = 0
    for (let i = 0; i < myArr.length; ++i) {
        sum += myArr[i];
    }
    return sum
}

console.log(findSum(myArr))
result = (findSum([2, 3, 4]))

console.log(`My result is ${result}`)

console.log(typeof null)
if (result != true) console.log("Success");
