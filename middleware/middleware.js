if (!process.env.PROD) {
    require('dotenv').config();
}

const jwt = require('jsonwebtoken');
const { User } = require('../model/userModel');
const { handleError } = require('../prepared/handleError');

const key = process.env.KEY;

const validateUser = (req, res, next) => {
    let getHeaders = req.headers['authorization'];
    if (getHeaders) {
        let extractToken = getHeaders.split(" ");
        let getToken = extractToken[1];

        try {
            let verifyToken = jwt.verify(getToken, key);
            User.findOne( { "_id": verifyToken.id } ).select( '+firends' + '+friend_requests' + '+notifications' ).exec( async ( err, message )=> {
                if (!err) {
                    req.onlineUser = message;
                    next();
                }
            } )
        } catch (error) {
            handleError();
        }
    }
}

module.exports = { validateUser };