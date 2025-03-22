let p1 = {
    fname: 'Hitesh',
    lname: 'Ch',
    address: {
        h: 1,
        s: 2
    }
}

const p1KaString = JSON.stringify(p1)
let p2 = JSON.parse(p1KaString)

p2.address.h = 5

console.log(p1);
console.log(p2);
