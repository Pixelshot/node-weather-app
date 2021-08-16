const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const local = process.argv[2];

geocode(local, (error, { latitude, longitude, location } = {}) => {
  if (!local) {
    return console.log("Please enter a valid location");
  } else {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  }
});

// ===================================================================================================
// geocode(local, (error, { latitude, longitude, location }) => {
//   if (!local) {
//     return console.log("Please enter a valid location");
//   } else {
//     if (error) {
//       return console.log(error);
//     }

//     forecast(latitude, longitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error);
//       }

//       console.log(location);
//       console.log(forecastData);
//     });
//   }
// });
// // This method of destructuring works if there is no error
// // The moment it hits an error it'll print out the error and will try to destructure an undefined response and break the app
// // Same concept as:
// const greet = (name = 'User') => {
//   console.log(`Hello ${name}!`)
// }
// // If we didn't set the default value for name and no input was given, it'll return 'Hello undefined'
// // For our function below, we can set it to an empty object
// // At least this way it'll try to destructure an empty object which returns undefined
// // This is fine because it was never going to run response since it ran into an error and it will not crash the function
