const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');

const users = [
  {username: 'Evelyn', email: 'eve@gmail.com', password:'1234'},
  {username: 'Pepito', email: 'pepito@gmail.com', password:'1234'},
  {username: 'Juanito', email: 'juanito@gmail.com', password:'1234'}
];

const todos = [
  {title: 'tarea1', description: 'descripción1', userId: 1},
  {title: 'tarea2', description: 'descripción2', userId: 2},
  {title: 'tarea3', description: 'descripción3', userId: 3},
  {title: 'tarea4', description: 'descripción4', userId: 3},
];

// const categories = [];

// const todosCategories = [];

db.sync({force: true})
  .then(()=> {
    console.log('iniciando con el sembradio');
    users.forEach((user)=> Users.create(user)); //inserta información
    
    setTimeout(()=> {
      todos.forEach((todo)=> Todos.create(todo));
    }, 100)
  })
  .catch((error)=> console.log(error));