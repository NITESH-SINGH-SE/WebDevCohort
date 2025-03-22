const tea = {
    name: 'Ginger',
    type: 'Milk',
    caffeineContent: 'High',
    greenTea: {
        name: "green"
    }
}

console.log(tea.name, tea["type"]);

tea.origin = "India"
tea.caffeineContent = "Medium"
console.log(tea);

delete tea.type

console.log("origin" in tea);

for (key in tea) {
    console.log(key, typeof key, tea[key]);
    
}

let teaString = JSON.stringify(tea)
teaCopy = JSON.parse(teaString)

// teaCopy = {...tea}
// teaCopy = tea

console.log(teaCopy);

tea.describe = function() {
    return `Name: ${tea.name}, Type: ${tea.type}, Caffine: ${tea.caffeineContent}`
}

console.log(tea.describe());

const source = { b: 4, c: 5 };

Object.assign(tea, source);

console.log(tea);

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({a: 1, b: 2, d: 7}, obj1)

console.log(obj1);
console.log(obj2);

obj1.b.c = 9
console.log(obj2.b.c);