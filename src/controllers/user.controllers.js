const saltRounds = parseInt(process.env.SALT_ROUNDS);
const bcrypt = require("bcryptjs");
// schema
const { userSchema } = require("../models/index");

const createAccount = (user, password) => {
    return new Promise( async (resolve, reject) => {
        bcrypt.genSalt(saltRounds, (saltError, salt) => {
            if (saltError){
                reject(saltError);
                return false;
            }
            else{
                bcrypt.hash(password, salt, (hashError, hash) => {
                    if (hashError){
                        reject(hashError);
                        return false;
                    }
                    else{
                        var addDoc;
                        try{
                            addDoc = userSchema.create({
                                user: user,
                                password: hash
                            });
                        }
                        catch(error){
                            reject(error);
                            return false;
                        }
                        resolve(hash);

                    }
                });
            }
        })
    });
}

module.exports = {
    createAccount
}