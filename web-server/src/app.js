// Use built in path module to connect server with HTML file in Public
const path = require("path");
// Express is a function
const express = require("express");
// For partials
const hbs = require("hbs");

// To serve index.html file, it needs to be an absolute path from the root of your machine, it can't be a relative path
// use console.log(__dirname) & console.log(__filename) to see the difference
// console.log(__filename);
// // /home/pixelshot/Programming/NodeStuff/AndrewMead/web-server/src/app.js

// console.log(__dirname);
// /home/pixelshot/Programming/NodeStuff/AndrewMead/web-server/src
// __dirname points towards the path where the file is residing(excluding the file itself). This is what we use to serve up our index.html file
// But the path is not 100% there yet so we will use built in node module called path to connect the dots
// console.log(path.join(__dirname, "../public"));

const app = express(); // express function does not take in any argument

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// By default, Express will search for "views" folder for rendering. We can change this but we need to let Express know where to look
const viewsPath = path.join(__dirname, "../templates/views");
// We then use app.set() to tell Express to use this path
app.set("views", viewsPath);

// hbs setup for partials
const partialsPath = path.join(__dirname, "../templates/partials");
// Instead of app.set() we use hbs to handle path for partials
hbs.registerPartials(partialsPath);

// use hbs package to serve our dynamic views
// .set() allows you to set a value for a given express setting and there are a few
// 1. Key
// 2. Setting name
// 3. Value we want to set
app.set("view engine", "hbs");

// .use() to serve up directory(for static views)
app.use(express.static(path.join(publicDirectoryPath)));

// .get() contains two important elements
// .get(route/path to the server, callback function that contains (req, res) => {})
// request(req) returns an Object containing information about the incoming request to the server
// response (res) contains a bunch of methods allowing us to customize what we're going to send back to the requester

// send() can send regular text, HTML or JSON format
// JSON format:
// - Express will automatically stringify the JSON for us
// - Accepts in Array and Object format

app.get("", (req, res) => {
  // render allows us to render one of our views
  // We're using render to serve our hbs view
  // Only the filename needs to match up with the one in hbs. We can omit the extension
  // First argument is the name to render, second argument is an object that contains all of the values you want that view to be able to access
  res.render("index", {
    title: "Weather",
    name: "Haz",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Haz",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Haz",
    helpText: "This is some helpful text",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Brisbane",
    forecast: "Slight breeze",
  });
});

// use .listen() to start up the server
// .listen() contains two elements
// .listen(port number, an optional callback function that runs when the server is up and running)
// Although the server starts up almost instantly, the process is asynchronous
app.listen(3000, () => {
  console.log("Server is up on port 3000..."); // This is never going to display on the browser. That's what res.send() is for. This is just a useful information when running the application
});
