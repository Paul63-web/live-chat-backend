const jwt = require('jsonwebtoken');

const generateJwt = userInfo=> {
    let userJwt = jwt.sign({
        id: userInfo._id,
        email: userInfo.email
    }, process.env.KEY, { expiresIn: '2h', issuer: 'localhost:5430'});

    return userJwt;
}

module.exports = { generateJwt };