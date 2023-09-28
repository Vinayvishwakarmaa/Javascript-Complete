// Singleton




// Object literals

const mysym = Symbol("key1");


const jsUser = {
      name: "Vinay",
      "full name": "Vinay Vishwakarma",
       [mysym]: "mykey1",
      Age: 22,
      Location: "Gwalior",
      email: "vinay@google.com",
      isLoggedIn: false,
      lastLoginDays: ["Monday", "Saturday"],
      
};

//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
//  console.log(jsUser[mysym]); // interview symbol


jsUser.email = "vinay@amazone.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "vinay@netflix.com";
// console.log(jsUser);

jsUser.gretting = function () {
      console.log("Hello JS user");
}

jsUser.grettingTwo = function () {
      console.log(`Hello JS User,${this.name}`);
}


console.log(jsUser.gretting());
console.log(jsUser.grettingTwo());


