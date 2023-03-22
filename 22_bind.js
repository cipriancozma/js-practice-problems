// allows to bind the 'this' keyword to a particular object
this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function () {
    return this.distance;
  },
};

const roadTrip2 = {
  distance: 2000,
};

const getTripDistance = roadTrip1.getDistance.bind(roadTrip1);
const getTripDistance1 = roadTrip1.getDistance.bind(roadTrip2);

console.log(getTripDistance());
console.log(getTripDistance1());
