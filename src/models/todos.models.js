const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Todos = db.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    // references: { //indica que es la llave foranea, modelo y id
    //   model: Users, 
    //   key: "id"
    // }
  }
});

module.exports = Todos;