console.log('starting app.js');

const db = require('./db.js');

module.exports.handleSignUp = (email, password) => {

    // check up if the email is available in db
    db.saveUser({

        email,
        password

    });

    // If the email and password are available
    //      send the welcom messate to the user.

    // It is very complicated and hard to test.
    // So we should use "spies" at this point.

}