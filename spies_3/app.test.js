console.log('starting "app.test.js"');

const expect = require('expect');

const rewire = require('rewire');


// ---------------------------------Rewire------------------------

// Making rewireing "db" variable name in "app.js" to resue it 
//      in "spy" down below.
// 
// Bear in mind that "rewire" and "spy" to test the interaction
//      between the calling and invoked functions.
const app = rewire('./app');

/**
 * To test data and its functions,
 *      for instance, a function of "db.js" 
 *      which is going to be database fucntion,
 *      is going to put in the spy.
 * 
 * " app.__set__ " : "app" is a component of "app.js"
 *                   "__set__" indicates its method
 * 
 * 
 * " app.__get__ " is same as above
 * 
 */

describe ('Rewire_Test', () => {

    // Defintion of method of the component, './app.js'
    let db = {

        // assign "expect.createSpy()"
        //      in the "saveUser" function in "app.js". 
        saveUser: expect.createSpy()

    };

    // Replace the fisrt 'db' argument which is from "app.js"
    //       which is calling "db.js" with the second "db"
    //       which is the varible of this spy. 
    app.__set__('db', db);
    // console.log( app.__set__('db', db))

    it('Same thing. It should correctly call the spy with the arguments', () => {

        let spy = expect.createSpy();
        spy('Andrew', 25);

        expect(spy).toHaveBeenCalledWith('Andrew', 25);

    });

    it('should call saverUser with the object defined here', () => {

        const email = 'joonseoan@gmail.com';
        const password = '12345';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});

    });
});


// ------------------------------ Spy -------------------------------

describe('Basic_App', () => {

    it('should call the spy correctly', () => {
        
        // "createSpy()"" will return a virtual function of "spy expect".
        //      Then, it will swap out the real function
        //      into the virtual function.
        // The variable name must be "spy"
        let spy = expect.createSpy();
        // console.log('spy', spy);
        
        // execute "spy" module
        spy();

        // It a part of the verification.
        // By using "mjackson expect" which specifies "spy"
        //      we use "toHaveBeenCalled()"
        expect(spy).toHaveBeenCalled();
    });

});

describe('With_Argument', () => {

    it('It should call the syp with arguments correctly', () => {

        let spy = expect.createSpy();
        spy('Andrew', 25);

        // "toHaveBeenCalledWith" is to verifiy that
        //      the arguments correctly pass through the real function
        expect(spy).toHaveBeenCalledWith('Andrew', 25)

    });

});