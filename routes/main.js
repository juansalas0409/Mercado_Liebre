const express = require("express");

const router = express.Router();

const mainController = require('../controllers/mainControllers');

router.get("/", mainController.home);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

module.exports = router;