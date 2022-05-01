const getUserDetails = (req, res) => {
    let currentUser = req.onlineUser;

    let userDetails = {
        userId : currentUser._id,
        fullname : currentUser.fullname,
        userName : currentUser.username,
        friends : currentUser.friends,
        notifications : currentUser.notifications,
        firendRequests: currentUser.firend_requests
    }

    res.send({success: true, message: userDetails});
}

module.exports = { getUserDetails };