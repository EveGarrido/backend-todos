//instancia para la conexión de la db
const db = require('../utils/database');
//tipos de datos de sequelize
const {DataTypes} = require('sequelize');

//definir modelo, con mayusculas
const Users = db.define('users', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, //validando que sea un correo electronico
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Users;