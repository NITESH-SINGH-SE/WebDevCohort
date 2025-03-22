const person = {
    x: 10,
    firstName: "Nitesh",
    lastName: "Singh",
    hobbies: ["Dancing", "Gym"],
    isMarried: false,
    hadCrush: Infinity,
    getFullName: function() {
        return 'Nitesh Singh'
    },
    address: {
        hno: 1,
        city: "Cuttack",
        state: "Odisha"
    }
}

console.log(person.address)

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: {},
    turnOff: function() {

    },
    volumeUp: function() {

    }
} 


let p1 = {
    fname:'Hitesh'
}

let p2 = p1
p2.fname = 'Piyush'
console.log(p1)
console.log(p2)


let a1 = [1, 3, 4, 2, 7]
let a2 = a1
console.log(a1);
console.log(a2);

a2[0] = 9
console.log(a1);
console.log(a2);

