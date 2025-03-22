let count = 8

function createCounter() {
    let count = 0
    return function() {
        count++;
        return count
    }
}

// createCounter()
const counter = createCounter()
console.log(counter());
console.log(counter());

// function() {
//     console.log("hitesh")
// }()

(function() {
    console.log("hitesh")
})()
