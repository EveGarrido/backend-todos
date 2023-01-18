//aqui se importan todos los modelos creados
const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');

const initModels = ()=>{
  //relaciones
  Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'}); //segundo parametro es optativo
  Users.hasMany(Todos, {as: 'tasks', foreignKey: 'user_id'});

  TodosCategories.belongsTo(Todos, {as: 'tasks', foreignKey: 'todo_id'});
  Todos.hasMany(TodosCategories, { as: 'categories', foreignKey: 'todo_id'});

  TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
  Categories.hasMany(TodosCategories, {as: 'tasks', foreignKey: 'category_id'});

  //trabajo en clases
  Categories.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
  Users.hasMany(Categories, {as: 'category', foreignKey: 'user_id'});
}

module.exports = initModels;