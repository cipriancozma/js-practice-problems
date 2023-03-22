// What is a closure?
// an inner function that has access to the scope of the enclosing function

// Code out an example closure that functions properly

function outerFunction(param1) {
  const param3 = 10;
  function innerFunction(param2) {
    return param1 + param2 + param3;
  }

  return innerFunction(4);
}

console.log(outerFunction(5));
