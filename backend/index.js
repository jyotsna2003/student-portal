const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jyotsna@2003',
    database: 'student_portal'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

app.post('/students', (req, res) => {
    const { name, age, attendance, cgpa } = req.body;
    db.query('INSERT INTO students (name, age, attendance, cgpa) VALUES (?, ?, ?, ?)', [name, age, attendance, cgpa], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: results.insertId, name, age, attendance, cgpa });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
