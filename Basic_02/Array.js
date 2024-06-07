// Array

let myArray = [1,2,3,4,5,6]
console.log(myArray);

let superHeor = ["IronMan", "SuperMan", "Saktiman", "Thor"]
console.log(superHeor);
console.log(superHeor.length);
console.log(superHeor.toLocaleString());
console.log(superHeor.toString());

const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);