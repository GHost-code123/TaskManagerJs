const express = require('express');
const Task = require('../models/task');

const router = express.Router();


//Post Method
router.post('/tasks', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const dataToSave = await task.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;
