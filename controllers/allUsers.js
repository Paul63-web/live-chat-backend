const { User } = require("../model/userModel");
const { handleError } = require("../prepared/handleError");

const getAllUsers = (req, res) => {
    let user = req.onlineUser;
    let allUser = User.find((err,result)=>{
        if (!err) {
            res.json( {success: true, message: result } )
        }else {
            handleError
        }
    })
    console.log(allUser)
}

module.exports = { getAllUsers }