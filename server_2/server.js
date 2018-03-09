console.log("starting server.js");

const express = require('express');

let app = express();

app.get('/', (req, res) => {

    res.send('Hello Express');

});

app.listen(3000);

// "app" is defined as a variable.
// Therefore we can expport 
//      as an property of the object.
module.exports.app = app;