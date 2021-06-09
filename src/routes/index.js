const express = require ('express');
const { success, error } = require('../network/response.js');

const router = express.Router( );
router.get('/message', (  (req, res ) => {
    console.log( req.headers );
    res.header( {
        "custom-header": "Nuestro valor personalizado"
    });
    //res.send('Mensaje añadido');
    success( req, res, "Message list" , 200);
}));

router.post('/hi', (  (req, res ) => {
    success(req, res, 'Hola desde post', 200 )
}));



module.exports = router;