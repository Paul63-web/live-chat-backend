const editProfile = (req, res) => {
    console.log(req.body);
    res.json({"message": req.body});
}

module.exports = { editProfile }