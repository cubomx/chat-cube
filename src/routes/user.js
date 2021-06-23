const express = require('express');
const { success, error } = require('../network/response');
// controller
const controller = require('../controllers/user.controllers');

const router = express.Router( );
router.post('/signIn', (req, res) => {
    controller.createAccount(req.body.user, req.body.password)
        .then( (value) => {
            console.log( value );
            success(req, res, "Fine", 200);
        })
        .catch( (error) => {
            console.error("Some error hapenned", error);
            error(req, res, error, "", 500);
        });
    
});

module.exports = router;
