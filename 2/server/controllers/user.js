const bcrypt = require('bcrypt');
const sequelize = require('../config/db');
const User = require('../models/userModels');
const saltRounds = 10;

const getAllUsers = async (req, res) => {
    const users = await sequelize.models.User.findAll();
    res.json(users);
}

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user with hashed password
        const user = await User.create({ username, email, password: hashedPassword });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


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
    try {
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const userData = {
            id: user.id,
            username: user.username,
            email: user.email,
        };
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllUsers,
    registerUser,
    getUserById,
    loginUser,
};