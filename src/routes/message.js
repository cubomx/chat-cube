const express = require ('express');
const { success, error } = require('../network/response.js');
// controller
const controller = require('../controllers/message.controllers');

const router = express.Router( );
router.get('/', (  (req, res ) => {
    console.log( req.headers );
    res.header( {
        "custom-header": "Nuestro valor personalizado"
    });
    //res.send('Mensaje añadido');
    success( req, res, "Message list" , 200);
}));

router.post('/', (  (req, res ) => {
    controller.addMessage(req.body.user, req.body.message)
        .then( (fullMessage) => {
            success(req, res, 'Message submitted correctly', 200 )
        })
        .catch( () => {
            error(req, res, 'Invalid info', 'Please send \'user\' & \'message\' in the body ', 400);
        });
    
}));

module.exports =  router;