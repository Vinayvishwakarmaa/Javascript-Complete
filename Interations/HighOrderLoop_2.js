// Object Loops

const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};

// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const Programing = ["js", "cpp", "py", "rb", "java", "swift"];


// for (const key in Programing) {
//       console.log(Programing[key]);
// }


const map = new Map(); // Unique value
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");


for (const key in map) {
      // console.log(key); //Not Working
}

