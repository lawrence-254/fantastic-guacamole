const express = require('express');

const userRoutes = express.Router();
const sequelize = require('../config/db');

const getAllUsers = async (req, res) => {
    const users = await sequelize.models.User.findAll();
    res.json(users);
}

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await sequelize.models.User.create({ username, email, password });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await sequelize.models.User.findByPk(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await sequelize.models.User.findOne({ where: { email, password } });
    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
}