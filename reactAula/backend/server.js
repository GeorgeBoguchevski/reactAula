const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database.sqlite');

app.use(cors());
app.use(bodyParser.json());

// Criar tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
)`);

// Rota GET (listar usuários)
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) res.status(500).send(err);
        else res.send(rows);
    });
});

// Rota POST (adicionar usuário)
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
