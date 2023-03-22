// write a function that keeps track of how many times it was called and returns that number

function getCalled() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const instanceOne = getCalled();
const instanceTwo = getCalled();

console.log(instanceOne()); // returns 1
console.log(instanceOne()); // returns 2
console.log(instanceTwo()); // returns 1
