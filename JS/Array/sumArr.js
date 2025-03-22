// arr1 = [1, 3, 5, 4, 3, 3, 2, 6, 7, 8]

// sum = arr1.reduce((accumulator, currVal) => 
//     accumulator + currVal
// , 0)

// console.log(sum);


// If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

arr1 = []

sum = arr1.reduce((accumulator, currVal) => 
    accumulator + currVal
, 5)

console.log(sum);