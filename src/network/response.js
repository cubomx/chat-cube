const  success = ( req, res, msg, status ) => {
    let response = {
        error: '',
        message: msg,
        body: req.body,
        method: req.method
    };
    res.status(status || 200 ).json( response );
}

const error = ( req, res, msg, status) => {
    let response = {
        error: msg,
        message: msg,
        body: req.body,
        method: req.method
    };
    res.status( status || 500).json( response );
}



module.exports = {
    success: success, 
    error: error
}