// Function and parameter in JS

function sayName() {
  console.log("V");
  console.log("i");
  console.log("n");
  console.log("a");
  console.log("y");
}

// sayName()

// function addTwoNumbers(number1, number2) {
//       console.log(number1 + number2);
// };

// const result = addTwoNumbers(4, 9);
// console.log("Result",result);

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2
  //    return result

  return number1 + number2;
}

// const result = addTwoNumbers(4, 9);
// console.log("Result", result);

function loginUserMessage(user = "Vinay") {
  if (!user) {
    console.log("Please enter your user name");
    return;
  }
  return `${user} just logged in`;
}

// console.log(loginUserMessage("Vinay"));
// console.log(loginUserMessage("Kumar"));

function calculateCartPrice(val1, val2, val3, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200,300,400,900));

const user = {
  username: "VINAY",
  prices: 899,
};

function hanleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.prices}`
  );
}

// hanleObject(user)

// hanleObject({
//       username: "sam",
//       prices: 89997,
// })

const newArray = [200, 300, 400, 500];


function returnSecondValue(getArray) {
      return newArray[1]
}

// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([200,300,400,500]));


