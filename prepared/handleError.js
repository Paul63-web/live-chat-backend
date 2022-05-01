const handleError = ( req, res, err ) => {
    res.send(err);
    console.log(err)
}

module.exports = { handleError }