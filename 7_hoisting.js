// describe what variable and function hoisting is
console.log(color);
console.log(getProduct(2, 4));

var color = "blue";

function getProduct(num1, num2) {
  return num1 * num2;
}
