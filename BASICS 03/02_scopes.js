// let a = 600;
// if (true) {
//   let a = 10;
//   const b = 20;
//       console.log("INNER ", a);
// }

// console.log(a);
// console.log(b);

function one() {
  const username = "VINAY";

  function two() {
    const website = "YOUTUBE";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

// if (true) {
//       const username = "VINAY KUMAR"
//       if (username === "VINAY KUMAR") {
//             const website = " YOUTUBE"
//             console.log(username + website);
//       }
//        console.log(website);
//}

// console.log(username);

// +++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}





const addTwo = function (num) {
      return num + 2;
}

addTwo(5)
