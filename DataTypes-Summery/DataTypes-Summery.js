
/* Primitive */
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

// const score = 78;
// const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 34599846545456454542165n;
// console.log(bigNumber);


/**  Reference (Non primitive) */
// Array,Objects,Functions

const heros = ["shaktiman", "naagraaj", "Doga"];

let Obj = {
      name: "vinay",
      age: 22,    
}

const myFunc = function() {
      console.log("Hello World");
}

// myFunc()

// console.log(typeof Obj);

/******** Stack and Heap memory **********/

// Stack (primitive), Heap(Non-Primitive);

let myYoutubeName = "motivasional";
let anotherName = myYoutubeName;
anotherName = "Vinay Kumar";



console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
      email: "user@google.com",
      upi: "user@ypl",
}

let userTwo = userOne;

userTwo.email = "vinay@goole.com";

console.log(userOne.email);
console.log(userTwo.email);