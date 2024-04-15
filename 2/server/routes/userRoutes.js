const express=require('express');
const {getAllUsers,registerUser,getUserById,loginUser}=require('../controllers/user');
const route = express.Router();

route.get('/users',getAllUsers);
route.post('/register',registerUser);
route.get('/users/:id',getUserById);
route.post('/login',loginUser);

module.exports=route;