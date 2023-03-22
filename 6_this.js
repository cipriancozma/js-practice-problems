// What it is this keyword in JS and how it is used?
// refers to the object where the function is called

let house = {
  price: 100000,
  squareFeet: 2000,
  owner: "Cozma",
  getPricePerSquareFoot: function () {
    return this.price / this.squareFeet;
  },
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
