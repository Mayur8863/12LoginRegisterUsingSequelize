const Sequelize = require("sequelize");

const db  = new Sequelize('mayur','root','root',{
    host : 'localhost',
    dialect : 'mysql'
})

module.exports=db;