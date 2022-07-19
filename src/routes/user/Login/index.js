// ROUTE USER LOGIN

const router = require("express").Router()

const UserController = require("../../../controllers/User/UserController");

router.route("/")
    .get(UserController.userLogin.index)
    .post(UserController.userLogin.store)

module.exports = router;