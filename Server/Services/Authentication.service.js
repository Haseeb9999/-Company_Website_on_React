const { UserModel } = require("../Models");

const register = async(body)=>{
    const {name,phonenumber,email,message} = body;

    const user = await UserModel.create({name,phonenumber,email,message});
    return user;
}

module.exports ={
    register
}