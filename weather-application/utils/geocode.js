const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoicGl4ZWxzaG90IiwiYSI6ImNrcm4wbndlYTFvczUydXJ2ZThvMGNibXQifQ.xbwTUCOdQAR_7lR4EJiGfQ`;

  request({ url, json: true }, (error, response, { features } = {}) => {
    // console.log(body);
    if (error) {
      callback("Unable to connect to location services!");
    } else if (features.length === 0) {
      callback("Unable to find location. Please try again");
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
