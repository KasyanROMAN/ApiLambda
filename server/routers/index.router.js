const {Router} = require('express');
const router = Router();

const multypalay = require('../controllers/multyplay.controller');
router.post('/multyplay',multypalay.result);
module.exports = router;