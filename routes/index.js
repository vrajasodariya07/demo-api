var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

router.post('/add',user.insert);
router.get('/view',user.view);

module.exports = router;
