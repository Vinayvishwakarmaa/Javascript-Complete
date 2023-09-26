
const name = "Vinay ";
const repoCount = 42;

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String("Vinay");
console.log(gameName);
console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('i'));


// const newString = gameName.substring(-8, 4);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = " Vinay ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://vinay.com/vinay%20vishwakarma";

console.log(url.replace('%20', ' - '));
console.log(url.includes('ma')); // true

console.log(gameName.split('-'));