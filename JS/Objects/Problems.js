// let teas = ["Ginger", "Masala", "Green", "Lemon", "Oolong Tea"]
let teas = ["Ginger tea", "Masala tea", "Green tea", "Lemon", "Herbal tea"]

// teas.push("Chamomile Tea")
// console.log(teas)

// if (teas.indexOf("Oolong Tea") > - 1) {
//     teas.splice(teas.indexOf("Oolong Tea"), 1)
// }

// If 'if' not used and "Oolong Tea" is not present then last elemnent is deleted
// console.log(teas)

// const result = teas.filter((tea) => tea !== "Herbal tea")
// console.log(result);

// teas.sort();
// console.log(teas);

// for (let i = 0; i < teas.length; ++i) {
//     console.log(teas[i])
// }

// teas.forEach((element) => console.log(element))

cnt = 0
for (let i = 0; i < teas.length; ++i) {
    if (teas[i] === "Herbal tea") continue;
    cnt += 1 
}
console.log(cnt);


const teaInUpper = teas.map((item) => item.toUpperCase())
console.log(teaInUpper)

let res = ""
for (let i = 0; i < teas.length; ++i) {
    if(res.length < teas[i].length) {
        res = teas[i]
    }
}
console.log(res);

// for (let i = 0; i < teas.length / 2; ++i) {
//     teas[i] = teas[teas.length - 1 - i]
// }
// console.log(teas);

// let reversedArray = []
// for (let i = -1; i >= -teas.length; --i) {
//     reversedArray.push(teas[i])
// }
// console.log(reversedArray);
