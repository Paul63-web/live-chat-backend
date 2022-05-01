const { User } = require('../model/userModel');

const { generateJwt } = require('../controllers/jwt');

const { handleError} = require('../prepared/handleError');

const bcrypt = require('bcrypt');

const login = async ( req, res )=> {
    let { email, password } = req.body;

    User.findOne( { email } ).select( '+password' ).exec( async ( err, result ) => {
        if (err) {
            handleError( res, err );
        } else if( result ) {
            const validatePassword = await bcrypt.compare( password, result.password );
            if (validatePassword) {
                const userJwt = generateJwt(result);
                res.json( { token: userJwt, success: true, result } );
            } else {
                res.json( { success: false, message: "Login Failed", wrongPassword: true } );
            }
        } else {
            res.json( { success: false, message: "User does not exists", userNotExist: true } );
        }
    } )
}

module.exports = { login };