// call and apply methods

const car1 = {
  brand: "Porche",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}. \n`
    );
  },
};

const car2 = {
  brand: "Lamborghini",
};

const car3 = {
  brand: "Dacia",
};

// call()
car1.getCarDescription(2000, 1990, "blue");
car1.getCarDescription.call(car2, 2000, 2004, "red");

// apply()
car1.getCarDescription.apply(car3, [1000, 2000, "white"]); // an array is passed - the main difference between call and apply
