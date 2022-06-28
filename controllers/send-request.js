const sendRequest = (req, res) => {
    const user = req.onlineUser;
    res.json({"message": user});
}

module.exports = { sendRequest };