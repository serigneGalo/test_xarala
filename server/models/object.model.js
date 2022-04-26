const mongoose = require("mongoose")
const { isEmail } = require("validator")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },

    mail : {
        type: String,
        required: true,
        validate: [ isEmail, 'invalid email' ]
    },

    statut : {
        type: String,
        required: true
    },

    location : {
        type: String,
        required: true
    },

    phone : {
        type: Number,
        required: true,
        min: 3
    },

    image :{
        type : String
    }
})

module.exports = mongoose.model('user', userSchema);