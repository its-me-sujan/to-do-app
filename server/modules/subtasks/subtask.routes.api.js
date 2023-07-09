const express = require('express');
const router = express.Router();
const subtaskController = require('./subtask.controller')

router.use('/', (req, res, next) => {
    res.json({msg:"subtasks API"})
});

router.post('/', async(req, res) => {
    const subtaskResult = await subtaskController.create(req.body);
    res.json({data: subtaskResult});
});

module.exports = router;