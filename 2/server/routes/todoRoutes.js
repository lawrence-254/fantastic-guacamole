const express=require('express');
const route = express.Router();
const {getAllTodos,createTodo,getTodoById,updateTodo,deleteTodo}=require('../controllers/todo');


route.get('/todos',getAllTodos);
route.post('/todos',createTodo);
route.get('/todos/:id',getTodoById);
route.put('/todos/:id',updateTodo);
route.delete('/todos/:id',deleteTodo);

module.exports=route;
// Path: server/controllers/todo.js