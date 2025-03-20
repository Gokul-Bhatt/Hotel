const express = require('express');
const controllers  = require("../controller/auth-controller")
const router = express.Router();


router.route('/').get(controllers.home);
router.route('/register').post(controllers.register)
router.route('/contact').post(controllers.contact)

module.exports = router