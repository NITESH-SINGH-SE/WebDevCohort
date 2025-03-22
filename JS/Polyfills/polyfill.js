if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn){
        let ogArr = this
        for (let i = 0; i < ogArr.length; ++i) {
            userFn(ogArr[i], i)
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6]

const ret = arr.myForEach(function(val, ind) {
    console.log(`Value at ${ind} is ${val}.`);
    
})

console.log(ret);


if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(myFunc){
        let arr = this
        let newArr = structuredClone(arr)
        for (let i = 0; i < arr.length; ++i) {
            newArr[i] = myFunc(arr[i], i)
        }
        return newArr
    }
}

newArr = arr.map(x => x + 2)
console.log(newArr);


function fun(x) {
    console.log(x);
}

fun(4, 5)


if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        let res = []
        for (let i = 0; i < this.length; ++i) {
            if (userFn(this[i], i)) {
                res.push(this[i])
            }
        }
        return res
    }
}

console.log(arr.myFilter((e) => e % 2 == 0));


console.log("2" + 2);
console.log("10" - 5);

  