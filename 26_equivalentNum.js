console.log(900.9 === 300.3 * 3); // false
// 900.9 is not equal to 900.90000001

console.log((300.3 * 3).toFixed(2));
console.log(900.9 === Number((300.3 * 3).toFixed(2)));
