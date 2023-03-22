// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// used for transferring data
const myJsonObj = {
  myString: "hello",
  myNumber: 19,
  myNull: null,
  myBoolean: true,
  // myUndefined: [undefined],
  myArray: [20, 30, "orange"],
  // myFunction: [some function],
  myObject: {
    name: "Ciprian",
    age: 33,
  },
};

// This is how it should look like the json format
// const myJsonObj = {
//     "myString": "hello world",
//     "myNumber": 12345.6789,
//     "myNull": null,
//     "myBoolean": true,
//     "myArray": [20, 30, "orange"],
//     "myObject": {
//       "name": "Sam",
//       "age": 30
//     }
//   };
