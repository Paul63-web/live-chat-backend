const { User } = require("../model/userModel");
const { handleError } = require("../prepared/handleError");

const userFriends = (req, res) => {
    let allUser = User.find((err,result)=>{
        if (!err) {
            res.json( {success: true, message: result } )
        }else {
            handleError
        }
    })
    console.log(allUser)
}

module.exports = { userFriends }