let FirstName = "Rahamtullah"
let LastName = "Sheikh"
let UserName = "rhm856591"
let Repository = 52

// OLD METHOD
// console.log(FirstName + LastName + UserName + Repository); // OLD METHOD

// Modern Method
// console.log(`My first name is ${FirstName} and last name is ${LastName} and my github userId is ${UserName} and total repository on my gitHub account is ${Repository}`); // Modern Method

// console.table([{FirstName, LastName, UserName, Repository}])

// declearation of string using constructor
const strings = new String("Hello's")
// console.log(strings);
// function of strings
// console.log(strings[0]);
// console.log(strings.__proto__);
// console.log(strings.length);
// console.log(strings.toUpperCase());

console.log(strings.charAt(3));
console.log(strings.indexOf("l"));

let countChat = 0
let char = strings.toLowerCase()
for(let i=0; i<strings.length; i++){
    if(char[i] == 'h'){
        countChat++
    }
}
console.log(countChat);

// trim

let nameWithSpace = "         rhm           "
console.log(nameWithSpace);
console.log(nameWithSpace.trim());



// replace

const url = "https://sheikh.com/rahamtullah course"

const freshURL = url.replace(' ', '-') 
console.log(freshURL)

console.log(url.includes("sheikh"));

// split function 
console.log(url.split(" "));

// and more from mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String