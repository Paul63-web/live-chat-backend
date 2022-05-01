const userProfile = ( req, res ) => {
    let user = req.onlineUser
    
    let userProfileDetails = {
        name: user.fullname,
        email: user.email,
        phoneNumber: user.mobilenumber,
        username: user.username,
        profilePicture: user.profilePicture
    }

    res.send( { isAuthorized : true, message : userProfileDetails } );
}

module.exports = { userProfile }