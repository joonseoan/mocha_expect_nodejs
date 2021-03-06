console.log('starting utils.tes.js')

const expect = require('expect');

const utils = require('./utils');


// ---------------------------- describe() --------------------------------
/**
 * describe();
 * 
 * We can use this test module without importing a module.
 * 
 * Then, test all mocha codes including "mjackson expect" at once.
 * It generates the detail information.
 * 
 */

// 'Utils': the name of the test which contains the test items.
//     It can be named but by convention, 
//     it should be a test file name like 'utils.js' 
// Also, describe is able to group the tests as writing a describe()
//     inside of describe()
 describe('Utils', () => {

    describe('add', () => {

        it('should add two numbers', () => {

            let res = utils.add(33,11);
        
            if (res !== 44) {
        
                throw new Error(`${res} is not correct.`);
        
            }
        
        });

    });
    
    it ('should multiply x two times', () => {
    
        let res = utils.square(5);
    
        if (res !== 25) {
    
            throw new Error(`${res} is not 25.`)
        }
    });

    
    it('should add two numbers here', () => {

        let res = utils.add(33,11);

        // by using expect.toBe
        expect(res).toBe(44);

    });

    it('should add two numbers here', () => {

        let res = utils.add(33,11);
    
        // by using expect.toBe
        // expect(res).toBe(44).toBeA('string'); // => error
        expect(res).toBe(44).toBeA('number');
        // console.log(expect(res).toBe(44).toBeA('string')) => error 
    });
    
    
    it ('should multiply x two times', () => {
    
        let res = utils.square(5);
    
        expect(res).toBe(25).toBeA('number');
    
    });
    
    // notToBe
    it ('should not be same numbers', () => {
    
        // if it is not equal, it passes
        expect(5).toNotBe(25);
    
    });

    it('should add two numbers here', () => {

        let res = utils.add(33,11);
    
        // by using expect.toBe
        // expect(res).toBe(44).toBeA('string'); // => error
        expect(res).toBe(44).toBeA('number');
        // console.log(expect(res).toBe(44).toBeA('string')) => error 
    });
    
    
    it ('should multiply x two times', () => {
    
        let res = utils.square(5);
    
        expect(res).toBe(25).toBeA('number');
    
    });
    
    // notToBe
    it ('should not be same numbers', () => {
    
        // if it is not equal, it passes
        expect(5).toNotBe(25);
    
    });


 });

// ----------------- Mocha --------------------------

/**
 * [Mocha]
 *  npm i mocha --save-dev
    (=> we would find "devDependancies" attribute
    in "package.json" file. )
 */

/*

// "test.js" must be defined in the file name.
// It is a file for the test cases 
//      that will test the code.

// "it" is a component of "mocha".
// When we use "it", 
//      we do not need to import the testing code.
// It is called "behavior-driven-development". (BDD)
// The first argument is the expected result.
it('should add two numbers', () => {

    let res = utils.add(33,11);

    if (res !== 44) {

        throw new Error(`${res} is not correct.`);

    }

});

it ('should multiply x two times', () => {

    let res = utils.square(5);

    if (res !== 25) {

        throw new Error(`${res} is not 25.`)
    }
});

*/
// --------------------------------------------------------------

/**
 * mjackson expect
 * 
 * 1) webpage: https://github.com/mjackson/expect

   2) Setup

        npm install expect@1.20.2 --save-dev (becareful about version)
 * 
 */

// "tobe" in assertion

/*

it('should add two numbers here', () => {

    let res = utils.add(33,11);

    // by using expect.toBe
    expect(res).toBe(44);

});

*/

// toBeA(string) : to find the value type

/**
 * toBeA(string)
   expect(object).toBeA(string, [message])
   expect(object).toBeAn(string, [message])
 * 
 */

/*
it('should add two numbers here', () => {

    let res = utils.add(33,11);

    // by using expect.toBe
    // expect(res).toBe(44).toBeA('string'); // => error
    expect(res).toBe(44).toBeA('number');
    // console.log(expect(res).toBe(44).toBeA('string')) => error 
});


it ('should multiply x two times', () => {

    let res = utils.square(5);

    expect(res).toBe(25).toBeA('number');

});

// notToBe
it ('should not be same numbers', () => {

    // if it is not equal, it passes
    expect(5).toNotBe(25);

});

*/

it ('should not be same numbers', () => {

    // it is not equal because it is an object.
    // expect({name:'Andrew'}).toBe({name:'Andrew'});

    // ***for object comparison
    // expect({name:'Andrew'}).toEqual({name:'Andrew'});

    // toNotEqual for object comparison.
    // expect({name:'Andrew'}).toNotEqual({name:'andrew'});

    // for an array comparison
    //expect([1, 2, 3]).toInclude(4); // false
    
    // toExclude / toInclude for an objec or an array
    // expect([1, 2, 3]).toInclude(3); // true
    // expect([1, 2, 3]).toExclude(4); // true

    // it is true even though it has different type 
    //      in "age" property

    
    expect({

        name:'joon',
        age: '23',
        city: 'toronto'

    }).toInclude({

        age: 23,
        city: 'toronto'

    })

});

it ('firstName and lastName are included or excluded?', () => {

    let user = { age : 25, location : 'toronto' }; 
    
    let res = utils.setName(user,'Joon An');

    // if it is not equal, it passes
    expect(res).toInclude({
        
        firstName: 'Joon',
        lastName: 'An'

    });

});

// ------------------call back test-------------------------------------

// In order to test asynch function, we must include
//      a method property done() which is from "mocha"
// If "done()" is not specified, "expect" will run 
//      before the asynch function executes and therefore
//      it returns "undefined"

/**
 * module.exports.testAsynch = (a, b, callback) => {

    setTimeout(()=> {

        callback(a+b);

    }, 500);
}
 */

it('should do add a and b with callback', (done) => {

    utils.testAsynch(2, 3, (sum) => {

        // test with toBe(7) to verify "done()""
        expect(sum).toBe(5).toBeA('number');
        done();
    
    });

});

// We must notice that the max timeout is 
//      2000ms in default

/**
 * module.exports.asynchSquare = (x, callback) => {

    setTimeout(() => {

        callback(x*x);

    }, 1500);
}
 */

it('should be a vlaue square of x', (done) => {

    utils.asynchSquare(5, (square) => {

        expect(square).toBe(25).toBeA('number');
        
        done();

    });

});

