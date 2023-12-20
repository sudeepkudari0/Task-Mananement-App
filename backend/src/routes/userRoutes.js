const { Router } = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = Router();

router.get('/:id',auth, userController.user);

module.exports = router;