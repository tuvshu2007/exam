const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    type : String,
    name : String,
})

const userModel = model("user", userSchema);

module.exports = userModel