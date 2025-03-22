function myFun(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] *= 2
    }
}

function strFun(s) {
    s[0] = "A"
}

// let myArr = [1, 3, 2, 5]
// console.log(myArr);
// myFun(myArr)
// console.log(myArr);

let newStr = "Rose"
console.log(newStr);
// myFun(newStr)
strFun(newStr)
console.log(newStr);
