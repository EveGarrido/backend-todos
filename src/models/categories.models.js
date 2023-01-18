const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define ('categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  //trabajo en clases
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
  }
},
{
  timestamps: false 
}
);

module.exports = Categories;