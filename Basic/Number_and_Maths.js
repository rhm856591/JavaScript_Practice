const score = 100
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8922
console.log(otherNumber.toPrecision(3));

const visiualZero = 1000000000
console.log(visiualZero.toLocaleString("en-IN"));


// +++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.round(12.3212));
console.log(Math.ceil(2.1));
console.log(Math.floor(4.9));
console.log(Math.min(2,1,4,5,6));
console.log(Math.max(2,1,4,5,6));


console.log(Math.random());
console.log(Math.random()*6 + 1);
console.log(Math.floor(Math.random()*6) + 1);

// Important 
const min = 5
const max = 10

const ranNum = Math.floor(Math.random() * (max - min) + 1) + min
console.log(ranNum);