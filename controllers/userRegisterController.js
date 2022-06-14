const bcrypt = require('bcrypt');
const saltRounds = 11;
const registerValidation = require("../validation");
const Register = require("../models/userRegisterModel");
const userRegisterGet = (req,res)=>{
    res.send("User Register Page");
}

const userRegisterPost = async (req,res)=>{
    // validation
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    await Register.sync().then(result =>{
        console.log("Sync done" );
    });

    // check email duplication
    Register.findOne({where : {email: req.body.email}})
    .then(async (result) =>{
        if(result){
            return res.status(400).send("Email already exists");
        }
        else{
                //
                let password = req.body.password;
                bcrypt.hash(password, saltRounds, async (err,hash)=>{
                    // User Creation
                    const user = await Register.create({
                        name : req.body.name,
                        email:req.body.email,
                        phoneNo :req.body.phoneNo,
                        password : hash
                    }).then(result =>{
                        res.status(200).json(result);
                    })
                    .catch(err =>{
                    res.send("err : " + err);
                    });
                })
                
            }
    })
    .catch(err =>{
        return res.send(`err : ${err}`)
    })
    
    
}

module.exports = {
    userRegisterGet : userRegisterGet,
    userRegisterPost : userRegisterPost
}