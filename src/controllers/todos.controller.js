const TodosServices = require('../services/todos.service');

const getAllTodos = async (req, res)=>{
  try {
    const result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodoById = async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getTodoWithCategories = async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await TodosServices.getWithCategories(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// const getTodosWithCategories = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await TodosServices.getWithCategories(id);
//     res.json({
//       message: "Envinado tareas con categorias",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: error.messages,
//       details: error.stack,
//     });
//   }
// };

const createTodo = async (req, res)=>{
  try {
    const newTodo = req.body;
    const result = await TodosServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteTodo = async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await TodosServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoWithCategories
}