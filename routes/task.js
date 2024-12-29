const express = require('express');
const Task = require('../models/task');
const task = require('../models/task');

const router = express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const dataToSave = await task.save();
        res.status(201).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.patch('/tasks/:id', async (req, res) => {
	const taskId = req.params.id;

	const { title, description, completed, priority, createDate} = req.body;

	try {
		const result = await Task.findByIdAndUpdate(taskId, {title, description, completed, priority, createDate});
		if (result === null)
			res.status(202).json({ message: "No task found with this Id" });
		else
			res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.delete('/tasks/:id', async (req, res) => {
	const taskId = req.params.id;

	try {
		const result = await Task.findByIdAndDelete(taskId);
		if (result === null)
			res.status(202).json({ message: "No task found with this Id" });
		else
			res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.all('*', (req, res) => {
	res.sendStatus(404);
	res.end();
});

module.exports = router;
