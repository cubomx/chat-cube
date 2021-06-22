const express = require ('express');
var app = express( );
const router = require('./routes');
const morgan = require('morgan');
const path = require('path');

// variables
const port = 3000;


// Settings
app.set('port', process.env.PORT || port );


// Middlewares
app.use(morgan('dev'));
app.use(express.json( ));
app.use(express.urlencoded({extended : false}));

app.use('/api',  router );

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen( app.get('port'), ( ) => {
    console.log(`Listening in ${app.get('port')} port`);
} );