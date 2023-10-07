const user = {
  username: "Vinay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //  console.log("Got user details from database");
    // console.log(`Username:${this.username}`);
    console.log(this);
  },
};

const user2 = {
  username: "Vinay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //  console.log("Got user details from database");
    // console.log(`Username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date(); // Constructor

function User(username, loginCount) {
  this.username = username;
  this.loginCount = loginCount;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Vinay", 12);
const userTwo = new User("Vinay COde", 12);
console.log(userOne.constructor);

// console.log(userOne);
// console.log(userTwo);
