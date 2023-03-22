// What is an IIFE and why are they used?

// IIFE - Immediately Invoked Function Expression
// a function that is executed right after is created

// Code out an example IIFE that functions properly
(function addNum(num) {
  console.log(num * 2);
  return num * 2;
})(10);
