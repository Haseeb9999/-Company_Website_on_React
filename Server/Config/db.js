const mongoose = require("mongoose");

exports.ConnectDB = async()=>{
            await mongoose.connect("mongodb://127.0.0.1:27017/KMU");
            console.log(`The DB is connect with ${mongoose.connection.host}`);
}