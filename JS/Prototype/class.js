class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getNewName = function() {
        console.log("Function working");
    }

    getFullname() {
        return `${this.fname} ${this.lname}`
    }
}

// class NewPerson {
//     // constructor(fname, lname) {
//     //     this.fname = fname;
//     //     this.lname = lname;
//     // }

//     // getFullname() {
//     //     return `${this.fname} ${this.lname}`
//     // }
// }

const p1 = new Person('Piyush', 'Garg')
const p2 = new Person('Akash', 'Kadlag')

// console.log(p1.getFullname());
// console.log(p2.getFullname());

p1.getNewName();


// const p3 = new NewPerson()

console.log(Person.prototype);

const p4 = {}
p4.fname = "Hitesh"
p4.lname = "Ch"
p4.__proto__ = Person.prototype

console.log(p1);
console.log(p4);
console.log(p4.getFullname());


