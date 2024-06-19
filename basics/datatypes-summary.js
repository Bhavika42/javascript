// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345769698432n



// reference (non-primitive)

// array, objects, functions

const heroes = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "bhavika"
    
}

const myfunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myfunction);
console.log(typeof heroes);
console.log(typeof anotherId);


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "bhavika_24"

let anothername = myYoutubename
anothername = "UB_2420"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "bhavikasehgal2@gmail.com"
    
}

let userTwo = userOne

userTwo.email = "22bsm013@iiitdmj.ac.in"

console.log(userOne.email);
console.log(userTwo.email); 
