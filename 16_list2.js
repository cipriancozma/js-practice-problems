const list1 = [1, 2, 3, 4, 5];
const list2 = list1.concat([]); // slice(), concat([])

list1.push(6, 7, 8);

console.log("list1", list1);
console.log("list2", list2); // contains same values as list1 in this case -> pass by reference
