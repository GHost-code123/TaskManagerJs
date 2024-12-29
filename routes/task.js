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

router.get('/tasks', async (req, res) => {

	try {
		const tasks = await Task.find();
		if (tasks.length == 0)
			res.sendStatus(204);
		else
			res.status(200).json(tasks);
	}
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.all('*', (req, res) => {
	res.sendStatus(404);
	res.end();
});

module.exports = router;
