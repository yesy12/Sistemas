const mongoose= require("mongoose");

const UserSchema = mongoose.Schema({
    "name": String,
    "lastName": String,
    "cpf": Number,
    "age":Number,
    "dateBirthday": Date,
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