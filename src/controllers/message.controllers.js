
const addMessage = (user, message) => {
    return new Promise( (resolve, reject) => {
        if (!user || !message){
            console.error('[messageController]: Not user or message');
            reject('Incorrect data');
            return false;
        }
        console.log(message);
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),

        };

        console.info( fullMessage );
        resolve( fullMessage );
    });
    
}

module.exports = {
    addMessage,
}