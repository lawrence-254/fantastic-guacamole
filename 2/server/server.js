const express = require('express');
const app = express();
require('dotenv').config();

//routes
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');









const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
