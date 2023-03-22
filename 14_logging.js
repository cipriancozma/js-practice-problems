(function () {
  var x = (y = 200);
})();

console.log("y: ", y); // 200
console.log("x: ", x); // not defined

// use strict can be added here at the top of the file to not allow this
