console.log('starting utils.js');

module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x*x;

module.exports.setName = (user, fullName) => {

    let name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];

    return user;

}

module.exports.testAsynch = (a, b, callback) => {

    setTimeout(()=> {

        callback(a+b);

    }, 500);
}

module.exports.asynchSquare = (x, callback) => {

    setTimeout(() => {

        callback(x*x);

    }, 1500);
}
