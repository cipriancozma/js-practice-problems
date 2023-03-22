// object literal syntax

const person = {
  name: "Ciprian",
  age: 33,
  color: "blue",
  getAge: function () {
    return this.age;
  },
};

// new keyword && the object constructor
const student = new Object();
student.grade = 12;
student.gradePointAverage = 2.7;
student.classes = ["English", "Chemistry"];

student.getClasses = function () {
  return this.classes;
};

console.log("student", student);

// constructor function
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function () {
  return this.color;
};

const daciaCar = new Car("blue", "Dacia", 2002);
console.log(daciaCar);
