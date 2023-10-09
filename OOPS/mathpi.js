const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObj = Object.create(null);

const chai = {
  name: "ginger chai",
  price: 250,
  iseAvailable: true,

  orderChai: function () {
    console.log("chai nhi bhi");
  },
};

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
