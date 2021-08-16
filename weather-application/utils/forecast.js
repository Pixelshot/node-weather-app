const request = require("postman-request");

// Weather api
// Weatherstack api is limited to only 250 calls per month. Use it wisely
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=bcace1629cf7d9dcc7e8a266921f0a23&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (err, response, { error, current } = {}) => {
    if (err) {
      callback("Unable to connect. Please check your connection", undefined);
    } else if (error) {
      callback("Unable to find location. Please try again.", undefined);
    } else {
      const { temperature, feelslike, weather_descriptions } = current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is a ${feelslike}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;

// const forecast = (lat, long, callback) => {
//   const url = `http://api.weatherstack.com/current?access_key=bcace1629cf7d9dcc7e8a266921f0a23&query=${lat},${long}&units=m`;

//   request({ url, json: true }, (error, res, body) => {
//     if (error) {
//       callback("Unable to connect", undefined);
//     } else if (body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       const { temperature, feelslike, weather_descriptions } = body.current;
//       callback(
//         undefined,
//         `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is a ${feelslike}% chance of rain.`
//       );
//     }
//   });
// };

// forecast(123, 213, (err, res) => {
//   console.log("err:", err);
//   console.log("response:", res);
// });
