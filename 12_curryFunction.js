// function getProduct(num1, num2) {
//   return num1 * num2;
// }

// curried Function
function getProduct(num1) {
  return function secondNumber(num2) {
    return num1 * num2;
  };
}

console.log(getProduct(4)(2));

function getTravelTime(distance) {
  return function (speed) {
    return distance / speed;
  };
}

console.log(getTravelTime(400)(60));
console.log(getTravelTime(400)(50));
