const { v4: uuidv4 } = require("uuid");
const db = require("../models/db");

exports.createTodo = (req, res) => {
  const { title, status } = req.body;
  const todoId = uuidv4();
  db.run(
    `INSERT INTO todos (id, userId, title, status) VALUES (?, ?, ?, ?)`,
    [todoId, req.user.userId, title, status],
    (err) =>
      err
        ? res.status(400).json({ error: err.message })
        : res.json({ message: "Todo created successfully" })
  );
};

exports.getTodos = (req, res) => {
  db.all(
    `SELECT * FROM todos WHERE userId = ?`,
    [req.user.userId],
    (err, todos) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(todos);
    }
  );
};

// Similarly, updateTodo, deleteTodo functions would be implemented here.
