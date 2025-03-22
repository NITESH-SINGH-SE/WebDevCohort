// // flat polyfill
// function alreadyFlat(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         if (Array.isArray(arr[i]))
//             return false
//     }
//     return true
// }

// function flatten(depth, arr) {
//     if (depth === 0) {
//         return arr
//     }

//     if (alreadyFlat(arr)) {
//         return arr
//     }

//     let res = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; ++j) {
//                 res.push(arr[i][j])
//             }
//         } else {
//             res.push(arr[i])
//         }
//     }

//     let newRes = flatten(depth - 1, res)
//     return newRes
// }

// if (!Array.prototype.myFlat) {

//     Array.prototype.myFlat = function(depth = 1) {
//         let arr = structuredClone(this)
//         return flatten(depth, arr)
//     }
// }

// // const arr1 = [0, 1, 2, [3, 4]];

// // console.log(arr1.myFlat());
// // console.log(arr1);


// const arr1 = [1, 2, [3, 4]];
// console.log(arr1.myFlat())
// // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.myFlat())
// // [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.myFlat(2));
// // [1, 2, 3, 4, 5, 6]

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.myFlat(Infinity));
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// if (!Array.prototype.myJoin) {
//     Array.prototype.myJoin = function(sep = ','){
//         if (this.length === 0) return ""

//         let res = this[0]
//         for (let i = 1; i < this.length; ++i) {
//             res += sep + this[i]
//         }

//         return res
//     }
// }

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.myJoin());
// // Expected output: "Fire,Air,Water"

// console.log(elements.myJoin(""));
// // Expected output: "FireAirWater"

// console.log(elements.myJoin("-"));
// // Expected output: "Fire-Air-Water"

 
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(userFn, initVal) {
        let accum, curInd
        if (initVal) {
            accum = initVal
            curInd = 0
        } else {
            accum = this[0]
            curInd = 1
        }

        if (!accum) {
            throw new Error("Empty array with no initial value!")
        }

        for (let i = curInd; i < this.length; ++i) {
            let currVal = this[i];
            accum = userFn(accum, currVal)
        }

        return accum
    }
}

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].myReduce(getMax, 50)) // 100
console.log([50].myReduce(getMax, 10)) // 50

// callback is invoked once for element at index 1
console.log([1, 100].myReduce(getMax)); // 100

// callback is not invoked
console.log([50].myReduce(getMax)); // 50
console.log([].myReduce(getMax, 1)); // 1

// console.log([].myReduce(getMax)); // TypeError


