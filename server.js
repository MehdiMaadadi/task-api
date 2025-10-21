// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Fake database (in-memory)
let tasks = [
  { id: 1, title: "Learn GitHub", completed: true },
  { id: 2, title: "Build Task API", completed: false }
];

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST new task
app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update a task
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    return res.json(tasks[index]);
  }
  res.status(404).json({ message: "Task not found" });
});

// DELETE a task
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
