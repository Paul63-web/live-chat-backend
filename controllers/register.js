const { User } = require('../model/userModel');

const { generateJwt } = require('../controllers/jwt');

const newUser = async(req, res)=> {
    
    let {fullName, eMail, mobileNumber, userName, password} = req.body;

    const existedUser = await User.findOne( {"email": eMail} );

    if (!existedUser) {
        await User.create( {fullname: fullName, email: eMail, mobilenumber: mobileNumber, username: userName, password: password}, (err, result)=> {
            
            if(err) console.log(err);

            const userJwt = generateJwt(result);

            res.json( { success: true, token: userJwt, message: "Registration successful" } );
        } );
    }else {
        res.json( { userExist: true, message: "User already exist. Try using another gmail"} );
    }
}

module.exports = { newUser };