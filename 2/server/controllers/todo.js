const sequelize = require('../config/db');

const getAllTodos = async (req, res) => {
    const todos = await sequelize.models.Todo.findAll();
    res.json(todos);
}
    ;
const createTodo = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const todo = await sequelize.models.Todo.create({ title, description, status });
        res.json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTodoById = async (req, res) => {
    const { id } = req.params;
    const todo = await sequelize.models.Todo.findByPk(id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const todo = await sequelize.models.Todo.findByPk(id);
    if (todo) {
        todo.title = title;
        todo.description = description;
        todo.status = status;
        await todo.save();
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await sequelize.models.Todo.findByPk(id);
    if (todo) {
        await todo.destroy();
        res.json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};