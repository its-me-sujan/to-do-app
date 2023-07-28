const express = require('express');
const router = express.Router();
const todoController = require('./todo.controller');

//read
router.get('/', async (req, res, next) => {
    const result = await todoController.list();
    res.json({data: results});
});

// create
router.post('/', async(req, res) => {
    const todoResult = await todoController.create(req.body);
    res.json({data: todoResult});
});

// read by id
router.get('/:id', async(req, res) => {
    const result = await todoController.getById(req.params.id);
    res.json({data: results});
});

// update by id
router.put('/:id', async(req, res) => {
    const result = await todoController.updateById(req.params.id, req.body);
    res.json({data: results});
});

// delete by id
router.delete('/:id', async(req, res) => {
    const result = await todoController.remove(req.params.id);
    res.json({data: results});
});

module.exports = router;