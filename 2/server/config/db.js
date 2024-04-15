
const { Sequelize } = require('sequelize');

// SQLite database connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/todo.sqlite',
});

module.exports = sequelize;
