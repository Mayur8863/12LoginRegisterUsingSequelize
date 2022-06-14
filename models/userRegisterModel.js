const Sequelize = require("sequelize");
const db = require("../confiq/db");

module.exports = db.define("UserRegistration",{
    name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    phoneNo : {
        type : Sequelize.INTEGER
    },
    password : {
        type: Sequelize.STRING
    }
});
