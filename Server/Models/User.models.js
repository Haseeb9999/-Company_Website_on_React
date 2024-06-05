const mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phonenumber:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const model = mongoose.model("user", Schema);
module.exports = model;