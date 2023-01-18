const { Router } = require('express');
const { 
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
  getUserWithCategories,
} = require ('../controllers/users.controller');
const authMiddleware = require('../middlerwares/auth.middlewares');


const router = Router();

router.get('/users', authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUserById);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos', authMiddleware, getUserWithTasks);

//trabajo en clases
router.get('/users/:id/categories', authMiddleware, getUserWithCategories);

router.post('/users', createUser);

router.put('/users/:id', authMiddleware, updateUser);

router.delete('/users/:id', authMiddleware, deleteUser);

module.exports = router;