const Register = require("../models/userRegisterModel");
const userLoginGet = (req,res)=>{
    res.send("User Login Page");
}

const userLoginPost = (req,res)=>{
    Register.findOne({where : {email: req.body.email}})
    .then(async (result) =>{
        if(result){
            if(result.password === req.body.password){
                return res.status(200).send("login Sucess");
            }
            else{
                return res.status(404).send("Invalid Credentials");
            }
        }
        else{
            return res.send("Email Not found");
        }
    })
    .catch(err =>{
        res.send(`err2 : ${err}`)
    })
}

module.exports = {
    userLoginGet : userLoginGet,
    userLoginPost : userLoginPost
}