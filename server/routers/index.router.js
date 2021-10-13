const {Router} = require('express');
const user = require("../models/user")
const router = Router();

const makeCalculations = require('../controllers/makeCalculations.controller');
router.post('/makeCalculations',makeCalculations.result,
async (req, res) => {
    try 
    {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const{language,count,mimetype}=req.body; 
        console.log(language);
        const meaning = await user.find({language,count,mimetype})  
        if (meaning.isEmpty()) {
            return res.status(400).json({message: "empty value", meaning})
        }
    }
    catch(e)
    {
        console.log(e)
        res.send({message: "Server error"})
    }
});
module.exports = router;