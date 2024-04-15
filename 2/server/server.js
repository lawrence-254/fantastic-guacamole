const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
require('dotenv').config();


//database connection
const db = new sqlite3.Database('./db/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
}
);


//create table users
let users = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`;



db.run(users, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Table users created.');
}
);

//create table todos
let todos = `CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)`;

db.run(todos, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Table todos created.');
}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
