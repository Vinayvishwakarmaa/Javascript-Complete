let name = "Vinay     ";
// let myName1 = "Vinay Vishwakarma     ";

// console.log(name.trueLength());

/** ProtoType **/

// let myHero = ["spiderman", "spider"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${spiderman}`);
  },
};

Object.prototype.vinay = function () {
  console.log(`vinay is present in all objects`);
};

Array.prototype.heyVinay = function () {
  console.log(`Vinay says hello`);
};

// heroPower.vinay();
// myHero.vinay();
// myHero.heyVinay();
// heroPower.heyVinay();

/** inheritance **/

const User = {
  name: "Vinay",
  email: "Vinay@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASuport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiaurCode";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"vinay".trueLength();
"iceTea".trueLength();
