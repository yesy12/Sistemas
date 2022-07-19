// ROUTE USER REGISTRATION

const router = require("express").Router();

const UserController = require("../../../controllers/User/UserController")

router.route("/")
    .get(UserController.userRegistration.index)
    .post(UserController.userRegistration.store) 

module.exports = router; 