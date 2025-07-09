import express from 'express';
import Task from '../models/Task';

const router = express.Router();

router.get('/', async (_req, res) => {
  const task = await Task.create({ title: 'Seeded Task', completed: false });
  // const tasks = await Task.find();
  res.json(task);
});

router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  const saved = await newTask.save();
  res.status(201).json(saved);
});

export default router;
