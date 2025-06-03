const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3')
const app = express();
const db = new sqlite3.Database('./database.sqlite');

app.use(cors());
app.use(bodyParser.json());


db.run(`CREATE TABLE ID NOT EXISTS users(
    id INT PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
)`);

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) res.status(500).send(err);
        else res.send(rows);
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email], function(err) {
        if (err) res.status(500).send(err);
        else res.send({ id: this.lastID, name, email });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});
