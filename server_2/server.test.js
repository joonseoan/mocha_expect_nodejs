console.log('starting server.test.js');

const request = require('supertest');

// ".app" to access "app" in the parent
let app = require('./server').app;

// app.get() is asynch function 
//      because we do not know we get http requst
//      from the user.
it('should return world express', (done) => {

    // to call "supertest" with variable above
    request(app)
        .get('/') //it must be exactly same as in "app"
        .expect('Hello Exress') // start express
        .expect(200) // 200 is a status code
        .end(done)
});



