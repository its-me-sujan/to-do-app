const express = require('express');
const router = express.Router();

const toDosRouter = require('../modules/toDos/todo.routes.api');
const subtasks = require('../modules/subtasks/subtask.routes.api');

router.get('/', (req, res, next) => {
    res.json({msg: "Hello from routes API"});
});

router.use('/toDos', toDosRouter);
router.use('/subtasks', subtasksRouter);

module.exports = router;