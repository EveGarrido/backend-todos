const {Sequelize} = require ('sequelize');

//crear instancia con parametros de nuestra base de datos
//OBJETO DE CONFIGURACIÓN,  que son las credenciales de base de datos
const db = new Sequelize({
  database: "todoapp", 
  username: "postgres", //owner
  host: "localhost", //127.0.0.1
  port: "5432",
  password: "root",
  dialect: "postgres" //la base de datos que estamos usando (puede ser mysql, postgres, etc)
});


//exportar instancia
module.exports = db;