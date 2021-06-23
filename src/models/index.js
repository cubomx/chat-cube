const { Schema, model } =  require("mongoose");

const userSchema = new Schema( {
    user: String,
    password: String
});

module.exports ={
    userSchema: model("User", userSchema),
} 