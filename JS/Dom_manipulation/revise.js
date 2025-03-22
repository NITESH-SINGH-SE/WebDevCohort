// function applyOperation(a, b, operation) {
//     return operation(a, b)
// }

// const result = applyOperation(5, 4, (x, y) => x/y)

const person = {
    name: {
        fname: "Nitesh",
        lname: "Singh",
    },
    address: {
        city: "Cuttack"
    },
    phoneNumber: null ,
}

// const copiedPerson = JSON.parse(JSON.stringify(person))
const copiedPerson = structuredClone(person)

console.log(copiedPerson);
let path = "person.name"
// console.log(Object.hasOwn(person, "name"));
console.log(Object.hasOwn('${path}', "fname"));
// console.log(Object.hasOwn(person, "sname"));
// console.log(Object.hasOwn(person.name, "sname"));
// console.log(Object.hasOwn(person, "phoneNumber"));



// if (person.phoneNumber) {
//     console.log("Identified key with value undefined");   
// } else {
//     console.log("Cannot identify key with undefined value");
// }



