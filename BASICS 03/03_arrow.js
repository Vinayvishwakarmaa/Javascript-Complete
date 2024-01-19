const user = {
  name: "Vinay",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name},Welcome to website`);
  },
};

// user.welcomeMessage();
// user.name = "Sam";
// user.welcomeMessage();

// console.log(this);

// function Coffe() {
//       let username = "VINAY"
//        console.log(this.username);
//  }

// Coffe();

// const chai = function () {
//       let username = "VINAY"
//        console.log(this.username);
// } // undefined

const chai = () => {
  let username = "VINAY";
  console.log(this.username);
};


// chai();



//Basics aarrow function
// const addOne = (num1,num2) => {
//       return num1 + num2
// }
  
 

// const addOne = (num1,num2) => num1 + num2
// const addOne = (num1,num2) => (num1 + num2)

// const addOne = (num1,num2) => ({usernmae: "VINAY"})

// const myArray = [1,2,3,56,89]

// myArray.forEach((e)=> console.log())

console.log(addOne(56,89));
