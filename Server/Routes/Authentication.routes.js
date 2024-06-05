const express = require("express");
const { AuthenticationController } = require("../Controller");
const router = express.Router();

router.route("/register").post(AuthenticationController.Register)

module.exports = router;