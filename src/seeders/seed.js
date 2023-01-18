const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');

const users = [
  {username: 'Evelyn', email: 'eve@gmail.com', password:'1234'},
  {username: 'Pepito', email: 'pepito@gmail.com', password:'1234'},
  {username: 'Juanito', email: 'juanito@gmail.com', password:'1234'}
];

const todos = [
  {title: 'Estudiar node', description: 'descripción1', userId: 1},
  {title: 'Pasear al perro', description: 'descripción2', userId: 2},
  {title: 'Lavar los platos ', description: 'descripción3', userId: 3},
  {title: 'Ir al chequeo mensual', description: 'descripción4', userId: 3},
];

const categories = [
  {name: 'personal', userId: 1},
  {name: 'educacion', userId: 1},
  {name: 'salud', userId: 1},
  {name: 'trabajo', userId: 2},
  {name: 'hogar', userId: 2},
  {name: 'cocina', userId: 2},
  {name: 'deporte', userId: 3},
  {name: 'ocio', userId: 3},
  {name: 'financiero', userId: 3},
  {name: 'entretenimiento', userId: 3},
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];


db.sync({force: true})
  .then(()=> {
    console.log('iniciando con el sembradio');
    users.forEach((user)=> Users.create(user)); //inserta información
    
    setTimeout(()=> {
      todos.forEach((todo)=> Todos.create(todo));
    }, 100);

    setTimeout(()=> {
      categories.forEach((category)=> Categories.create(category));
    }, 150);

    setTimeout(()=> {
      todosCategories.forEach((tc)=> TodosCategories.create(tc));
    }, 200)
  })
  .catch((error)=> console.log(error));