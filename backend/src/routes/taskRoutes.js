const { Router } = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

const router = Router();

router.post('/',auth, taskController.addTask);
router.get('/:id', auth, taskController.getTasks);

module.exports = router;