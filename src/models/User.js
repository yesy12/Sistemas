const mongoose= require("mongoose");

const UserSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "cpf": {
        type: Number,
        required: true,
        index: { unique: true}
    },
    "email": {
        type: String,
        required: true,
        index: { unique : true}
    },
    "password": {
        type: String,
        required: true
    },
    "age":Number,
    "dateBirthday": {
        type: Date,
        required: true
    },
    "status": {
        type: Boolean,
        default: true,
    },
    "tierHierarchy": {
        type :  Number,
        default: 0,
    },
    "dateCreation":{
        type: Date,
        default: Date.now(),
    },
    "dateUpdate":{
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("User",UserSchema)