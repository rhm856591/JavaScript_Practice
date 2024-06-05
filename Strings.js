let FirstName = "Rahamtullah"
let LastName = "Sheikh"
let UserName = "rhm856591"
let Repository = 52

// OLD METHOD
console.log(FirstName + LastName + UserName + Repository); // OLD METHOD

// Modern Method
console.log(`My first name is ${FirstName} and last name is ${LastName} and my github userId is ${UserName} and total repository on my gitHub account is ${Repository}`); // Modern Method

console.table([{FirstName, LastName, UserName, Repository}])