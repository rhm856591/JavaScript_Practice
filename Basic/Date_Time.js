// Date

const date = new Date()

console.log(date);
console.log(date.toString()+ "\n");
console.log(date.toDateString()+ "\n");
console.log(date.toISOString()+ "\n");
console.log(date.toJSON()+ "\n");
console.log(date.toLocaleDateString()+ "\n");
console.log(date.toLocaleString() + "\n");

let myCreatedDate = new Date(2024, 0, 4)
console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})