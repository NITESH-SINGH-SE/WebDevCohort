// if(!Array.prototype.myAt) {
//     Array.prototype.myAt = function(index) {
//         let res = undefined
//         let arr = this
//         for (let i = 0; i < arr.length; ++i) {
//             if (index == i) {
//                 res = arr[i]
//             }
//         }
//         return res
//     }
// }

// arr = [1, 2, 4, 5, 9, 3]

// console.log(arr.myAt(2));

// function myFun() {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);    
// }

// myFun(1, 3, 4)

// if (!Array.prototype.myConcat) {
//     Array.prototype.myConcat = function() {
//         const res = [...this]
//         for (let i = 0; i < arguments.length; ++i) {
//             if (Array.isArray(arguments[i])) {
//                 for (let j = 0; j < arguments[i].length; ++j) {
//                     res.push(arguments[i][j])
//                 }
//             } else {
//                 res.push(arguments[i])
//             }
//         }
//         return res
//     }
// }


// .fill prototype
// if (!Array.prototype.myFill) {
//     Array.prototype.myFill = function(...args) {
//         let val = args[0], start = 0, end = this.length
//         if (args[1] && args[1] < this.length && args[1] >= -this.length) {
//             start = (this.length + args[1]) % this.length
//         } else if (args[1] && args[1] < -this.length) {
//             start = 0
//         } else if (args[1] && args[0] >= this.length) {
//             return this
//         }

//         if (args[2] && args[2] < this.length && args[2] >= -this.length) {
//             end = (this.length + args[2]) % this.length
//         } else if (args[1] && args[2] < -this.length) {
//             end = 0
//         }

        
//         for (let i = start; i < end; ++i) {
//             this[i] = val
//         }

//         return this
//     }
// }

// const newArr = [1, 2, 3, 4, 3, 7, 3, 6]
// console.log(newArr);
// console.log(newArr.myFill(1, 4, 6));

// console.log([1, 2, 3].myFill(4)); // [4, 4, 4]
// console.log([1, 2, 3].myFill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].myFill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].myFill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].myFill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].myFill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].myFill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].myFill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).myFill(4)); // [4, 4, 4]

// A single object, referenced by each slot of the array:
// const arr = Array(3).myFill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
// console.log(arr);


if (!Array.prototype.myFind) {
    Array.prototype.myFind = function (userFn) {
        // element, index, arr
        for (let i = 0; i < this.length; ++i) {
            if (userFn(this[i], i, this)) {
                return i
            }
        }
        return undefined
    }
}


// const arr1 = [5, 12, 8, 20, 23]
// console.log(arr1.myFind((element) => element > 10))

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }
  
//   console.log(inventory.find(isCherries));

// function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
//   console.log([4, 6, 8, 12].myFind(isPrime)); // undefined, not found
//   console.log([4, 5, 8, 12].myFind(isPrime)); // 5


// const numbers = [-6, 1, 4, 1, 5, 9, 2, 6];
// const firstTrough = numbers
//   .filter((num) => num % 3 === 0)
//   .myFind((num) => {num > 0} );
// console.log(firstTrough); // 1


// const array = [0, 1, , , , 5, 6];

// // Shows all indexes, not just those with assigned values
// array.find((value, index) => {
//   console.log("Visited index", index, "with value", value);
// });

// // Declare array with no elements at indexes 2, 3, and 4
// const array = [0, 1, , , , 5, 6];

// // Shows all indexes, not just those with assigned values
// array.find((value, index) => {
//   console.log("Visited index", index, "with value", value);
// });
// // Visited index 0 with value 0
// // Visited index 1 with value 1
// // Visited index 2 with value undefined
// // Visited index 3 with value undefined
// // Visited index 4 with value undefined
// // Visited index 5 with value 5
// // Visited index 6 with value 6

// // Shows all indexes, including deleted
// array.myFind((value, index) => {
//   // Delete element 5 on first iteration
//   if (index === 0) {
//     console.log("Deleting array[5] with value", array[5]);
//     delete array[5];
//   }
//   // Element 5 is still visited even though deleted
// });
// // Deleting array[5] with value 5
// // Visited index 0 with value 0
// // Visited index 1 with value 1
// // Visited index 2 with value undefined
// // Visited index 3 with value undefined
// // Visited index 4 with value undefined
// // Visited index 5 with value undefined
// // Visited index 6 with value 6

// console.log(array);

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array1.myFind(isLargeNumber));