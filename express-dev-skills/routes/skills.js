var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

// get /skills
router.get('/', skillsCtrl.index)
// get /skills/new
router.get('/new', skillsCtrl.new)
// get /skills/:id
router.get('/:id', skillsCtrl.show)
// post /skills
router.post('/', skillsCtrl.create)
// delete /skills/:id
router.delete('/:id', skillsCtrl.delete)
module.exports = router;
