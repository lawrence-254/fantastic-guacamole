const express = require('express');
const route = express.Router();
const { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todo');
const authMiddleware = require('../middlewares/authMiddleware');


route.get('/', authMiddleware, getAllTodos);
route.post('/todos', authMiddleware, createTodo);
route.get('/todos/:id', authMiddleware, getTodoById);
route.put('/todos/:id', authMiddleware, updateTodo);
route.delete('/todos/:id', authMiddleware, deleteTodo);

module.exports = route;
