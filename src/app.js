const express = require ('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const Users = require('./models/users.models');
const Todos = require('./models/todos.models');

const app = express();

app.use(express.json());

const PORT = 8000;

//probando conexión a la base de datos
db.authenticate()
.then(()=> console.log('Autenticación exitosa'))
.catch((error)=> console.log(error));

initModels();
db.sync({force: false})//force: true, borra la información
.then(()=> console.log('Base de datos sincronizada'))//se pone para saber si todo salio bien
.catch((error)=> console.log(error))//si hay error, lo muestra

app.get('/', (req, res)=>{
  res.status(200).json({message: "Bienvenido al servidor"})
})

//definir rutas de endpoint(ep)
//localhost:8000/users --> todo para usuarios
//localhost:8000/todos --> todo para tareas

//GET a /users
app.get('/users', async (req, res)=>{
  try {
    //obtener el resultado de consultar a todos los usuarios en la DB
    const result = await Users.findAll(); //es lo mismo que  select * from users
    res.status(200).json(result); 
  } catch (error) {
    console.log(error);
  }
});

//obtener usuario por id
app.get('/users/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener por username
app.get('/users/username/:username', async (req, res)=>{
  try {
    const { username } = req.params;
    const result = await Users.findOne({where: {username}});//  SELECT * FROM users WHERE username = ejemplo
    res.status(200).json(result); 
  } catch (error) {
    console.log(error);
  }
});

//Creando un usuario
app.post('/users', async (req, res)=>{
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

//actualizar
app.put('/users/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Users.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Eliminar
app.delete('/users/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await Users.destroy({
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

//ENDPOINTS BY TASKS
app.get('/todos', async (req, res)=>{
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get('/todos/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post('/todos', async(req, res)=>{
  try {
    const todo = req.body;
    const result = await Todos.create(todo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.put('/todos/:id', async(req, res)=>{
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Todos.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete('/todos/:id', async(req, res)=>{
  try {
    const { id } = req.params;
    const result = await Todos.destroy({
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});



app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})