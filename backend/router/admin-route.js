const adminMidlleware = require("../router/admin-middleware");
const authMiddleware = require("../auth-middleware");
const express = require("express");
const data = require("../controller/admin-controller");
const router = express.Router();

// router.route('/users').get(authMiddleware,adminMidlleware,data.getAllUser);
router.route('/users').get(data.getAllUser)
router.route('/users/delete/:id').delete(data.deleteUserById);
// router.route('/contact').get(authMiddleware,adminMidlleware,data.getAllContact);
router.route('/contact').get(data.getAllContact)
router.route('/contact/delete/:id').delete(data.deletecontactById);

module.exports = router;