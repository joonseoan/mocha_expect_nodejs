console.log("starting server.js");

const express = require('express');

let app = express();

app.get('/', (req, res) => {

    // res.send('Hello Express');

    // setup the status code of the server response
    // res.status(200).send('Hello Express');

    // adding an object
    /*
    res.status(404).send({

        error: 'Page not found'

    });
    */
    
    res.status(404).send({

        error : 'Page not found',
        name : 'Todo App v1.0'
    
    });

});

app.get('/about_myself', (req, res) => {

    // Default status code is 200.
    //      In result, we do not have to specify status code here
    //      even though the status code will be tested.
    res.send([

        { 
          name : 'Andrew',
          age :  25
        },
        {
          name : 'Jenny',
          age : 19
        },
        {
          name : 'Nicole',
          age: 32
        }

    ]);

});

app.listen(3000);

// "app" is defined as a variable.
// Therefore we can expport 
//      as an property of the object.
module.exports.app = app;