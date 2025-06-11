import { square, cube } from "./utils.js";

function component() {
  var element = document.createElement("pre");
  var square1 = require("./utils.js").square(100);
  var square2 = square(200);

  element.innerHTML = [
    "Hello webpack!",
    "5 cubed is equal to " + cube(10),
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());
