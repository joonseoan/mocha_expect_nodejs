console.log('starting server.test.js');

const request = require('supertest');

// To test assertion
const expect = require('expect');

// ".app" to access "app" in the parent
// let app = require('./server');
// "app" is one of the property of "express()" defined in "server.js"
//      Therefore require('./server').app is required.
let app = require('./server').app;


//---------------------- describe()---------------------------------------
/**
 * 
 * describe() can be used for the "express" test, too.
 * 
 */

 describe('Server', () => {

    describe('Root', () => {

        it('It should retrun Express', (done) => {

            request(app)
                .get('/')
                .expect((res) => {

                    expect(res.body).toInclude({

                        error : 'Page not found'

                    });

                })
                .expect(404)
                .end(done);
        });
    });

    describe('Root/about_myself', () => {

        it('It should be challenging assignment', (done) => {

            request(app)
                .get('/about_myself')
                .expect(200)
                .expect((res) => {

                    expect(res.body).toInclude({

                        name : 'Andrew',
                        age: 25

                    });
                })
                .end(done);

        });

    });

 });



/**
 * app.get('/', (req, res) => {

    res.send('Hello Express');

});

app.listen(3000);

// "app" is defined as a variable.
// Therefore we can expport 
//      as an property of the object.
module.exports.app = app;
 */

// app.get() is asynch function 
//      because we do not know we get http requst
//      from the user.
it('should return world express', (done) => {

    // to call "supertest" with variable above
    request(app)

        // .get('/') //it must be exactly same as in "app". It is a testing URL.
        // .expect('Hello Express') // We expect a string the server will send to the client.
        // .expect(200) // 200 is a status code
        // .end(done);

        /*
        .get('/') //it must be exactly same as in "app". It is a testing URL.
        .expect({

            error: 'Page not found'
        
        }) // We expect a string the server will send to the client.
        .expect(404) // 200/404 is a status code
        .end(done);
        */

       .get('/') //it must be exactly same as in "app". It is a testing URL.
       .expect((res) => {

            // "expect" here is "assertion"
            // "res.body" is an built in argument name about "res" object 
            //      to the user and "body" property of its object.
            expect(res.body).toInclude({

                error : 'Page not found'

            });

       }) // We expect a string the server will send to the client.
       .expect(404) // 200/404 is a status code
       .end(done);

});

/**
 * app.get('/about_myself', (req, res) => {

    res.status(200).send([

        { 
          name : joon,
          age :  25
        },
        {
          name : eunmi,
          age : 19
        }
    ]);
});
 */

it('It should be challenging assignment', (done) => {

    request(app)
        .get('/about_myself')
        .expect(200)
        .expect((res) => {

            expect(res.body).toInclude(
 
                // Must specify all properties in an element of an array
                { 
                    name : 'Andrew',
                    age : 25
                }
                
            );

        })
        .end(done);
});



