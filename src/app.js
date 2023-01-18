const express = require ('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

const app = express();


app.use(express.json());//formato json de body
app.use(cors());//permite al backend recibir todo tipo de peticiones

const PORT = process.env.PORT;//modificado luego de crear variable de entorno

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
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', todoRoutes);
app.use('/api/v1', authRoutes);

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})