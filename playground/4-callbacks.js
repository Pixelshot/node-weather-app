// A callback function is nothing more than a function that we provide as an argument inside of another function with the intention of having it called later on.
// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => name.length <= 4);

// const geocode = (location, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Philadelphia", (data) => {
//   console.log(data);
// });

// Challenge time
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
