// primitive 

//  7 types : string, number, boolean, null , undefined , Symbol, BigInt

const score =  100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(Id === anotherId)

const bigNumber = 3456543576654356754n

// Refrence (Non-primitive)

// Array , Objects , Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = { 
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)