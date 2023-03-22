const user1 = {
  name: "Jordan",
  age: 28,
};

const user2 = {
  name: "Jordan",
  age: 28,
};

console.log(user1 == user2); // false
console.log(user1 === user2); // false

// in this way we can convert to string the object and now are equal
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // false
