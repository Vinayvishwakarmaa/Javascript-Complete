#Project related to Dom
## Project link
[click here](http://127.0.0.1:5501/Project_01/index.html);

# Solution code

## Project 1

```Javascript
 console.log("Vinay");
 const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "purple") {
              body.style.backgroundColor = e.target.id;
          }
  });
});

```