const str = 'Piyush'

const obj = {x: 1,
    'x': 5,
    newFunc: function() {
        console.log("Using new function");
        
    },
    myFun(){
        console.log("Having fun with JS");
        
    }
}
// obj.myFun()
// obj.newFunc()

for (key in obj) {
    console.log(key, obj[key]);
    // console.log(key, obj.key);

}

console.log();

// let x = 'hoo'
// let y = {
//     x: 1
// }
// y.x = "zootopia"
// console.log(y)
// Output: { x: 'zootopia' }

// let x = 'hoo'
// let y = {
//     x: 1
// }
// y[x] = "zootopia"
// console.log(y)
// // Output: { x: 1, hoo: 'zootopia' }


let y = {
    1: 'hipop',
}
let x = 1
console.log(y);
// console.log(y.'1');
// console.log(y.1); throws error

const arr = [1, 2, 4, 6]
console.log(arr.__proto__);

console.log(arr.map((x) => x*2));
