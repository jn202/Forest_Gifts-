const {Sequelize}=require('sequelize')
require('dotenv').config()
module.exports=new Sequelize(
    process.env.DB_NAME ,//Название базы данных
    process.env.DB_USER, //Название пользователя
    process.env.DB_PASSWORD,//Пароль базы данных
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
