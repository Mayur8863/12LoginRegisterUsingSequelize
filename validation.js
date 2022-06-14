const Joi = require('joi');

const registerValidation = data =>{
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        phoneNo: Joi.number()
            .integer()
            .min(10)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    console.log(data);
    const err = schema.validate(data);
    return err;
}

module.exports = registerValidation;