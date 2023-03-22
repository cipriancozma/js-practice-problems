// my response

const tripleAdd = (num) => {
  return function doubleAdd(secondNum) {
    return function add(thirdNum) {
      return thirdNum + secondNum + num;
    };
  };
};

const response = tripleAdd(10)(20)(30); // should return 60
console.log(response);
