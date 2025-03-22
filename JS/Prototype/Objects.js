// const obj1 = {
//     fname: "Piyush",
//     lname: "Garg",
//     getFullName: function() {
//         return `${this.fname} ${this.lname}`
//     }
// }

// const obj2 = {
//     fname: "Anirudh",
//     lname: "Jwala",
//     // getFullName: function() {
//     //     return `${this.fname} ${this.lname}`
//     // }
// }

// // obj2.__proto__ = obj1
// // obj1.__proto__ = null  // Not found fn
// // obj1.__proto__ = obj2 // Cyclic prototype value
// console.log(obj2.__proto__);



// console.log(obj1.getFullName());
// // console.log(obj2.getFullName());


const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
  // console.log(myObj.a); // 7
  // console.log(myObj); // 25
  // console.log(myObj.b); // 8, returned from the get b() method
  // console.log(myObj); // 25
  // myObj.c = 50; // Calls the set c(x) method
  // console.log(myObj.a); // 25
  // console.log(myObj); // 25

  console.log(myObj);

  for (let k in myObj) {
    console.log(k);
    
  }
  