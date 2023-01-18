const {Sequelize} = require ('sequelize');
require('dotenv').config();

//crear instancia con parametros de nuestra base de datos
//OBJETO DE CONFIGURACIÓN,  que son las credenciales de base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER, //owner
  host: process.env.DB_HOST, //127.0.0.1
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres", //la base de datos que estamos usando (puede ser mysql, postgres, etc)
  logging: false,//silencia información que logea el sequelize
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false}}
});


//exportar instancia
module.exports = db;