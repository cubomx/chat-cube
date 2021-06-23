const  mongoose = require("mongoose");


mongoose.connect( process.env.MONGOOSE_URI_DEV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch( (error) => {
    console.error( error );
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.info('Database connected'));