const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.json({msg:"subtasks API"})
});

module.exports = router;