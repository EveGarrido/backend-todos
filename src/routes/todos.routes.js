const { Router } = require('express');
const { 
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoWithCategories
} = require('../controllers/todos.controller');
const authMiddleware = require('../middlerwares/auth.middlewares');

const router = Router();

router.get('/todos', authMiddleware, getAllTodos);
router.get('/todos/:id', authMiddleware, getTodoById);

//obtener tarea con sus categorias
router.get('/todos/:id/categories', authMiddleware, getTodoWithCategories);

router.post('/todos', authMiddleware, createTodo);
router.put('/todos/:id', authMiddleware, updateTodo);
router.delete('/todos/:id', authMiddleware, deleteTodo);

module.exports = router;