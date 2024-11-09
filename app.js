// To install express js run npm init and then run npm install express
// Install nodemon. Nodemon allows you to have your changes applied without having to restart the web server
// Run the web server using nodemon => nodemon app.js
import express from 'express';
//import the historicalData
import data from './historicalData.js'
const app = express();

// create a simple web server uisng express
app.get('/', (req, res) => {
  res.send("Hello World");
} );

// create webserver to handle get request to the /home route
app.get('/home', (req, res) => {
  res.send("Welcome Home!!!");
});

// create webserver to serve data contained in a js array
app.get('/data', (req, res) => {
  res.send(data);
});

// create webserver to serve a record with a specific ID
// In express, variables are declared like this => :varaible
// ID is stored within the request. The ID is sent with the request
// ID is stored in the params object
// find is an array function that fetches the first item that meets the test condition
app.get('/data/:id', (req, res) => {
  const foundRecord = data.find(item => {
    return item.id === req.params.id;
  });
  if(!foundRecord) { // When record is not found variable returns undefined, Undefined is "falsy" !foundRecord evaluates to true
    res.status(404).send(); // If record is not found return a 404 status code (Not Found)
  } else {
    res.send(foundRecord); // If record is found send back a response with the record
  }
  
});
app.listen('3000'); // Web server is configured to listen on port 3000