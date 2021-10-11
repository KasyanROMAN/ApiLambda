const {Router} = require('express');
const router = Router();

const makeCalculations = require('../controllers/makeCalculations.controller');
router.post('/makeCalculations',makeCalculations.result);
module.exports = router;