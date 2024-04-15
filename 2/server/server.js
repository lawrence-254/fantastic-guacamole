const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/db');
const User = require('./models/userModels');
const Todo = require('./models/todosModels');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authMiddleware = require('./middleware/authMiddleware');

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();

// Start your Express app and define routes here
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/åpi/todos', authMiddleware, todoRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Todo App');
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
