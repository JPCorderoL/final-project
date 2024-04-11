const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Define routes
router.get('/', (req, res) => {
    // Implement logic to fetch all tasks
});

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
