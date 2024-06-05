const {AuthenticationService} = require("../Services");

class AuthenticationController{
    static Register = async(req,res)=>{
        // res.send({body:req.body});
        const res_obj = await AuthenticationService.register(req?.body);
        res.send(res_obj);
    }
}

module.exports = AuthenticationController