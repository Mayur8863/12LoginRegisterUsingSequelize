const express = require("express");
const router = express.Router();

const controllers = require("../controllers/userRegisterController");
router.get("/get",controllers.userRegisterGet);
router.post("/post",controllers.userRegisterPost);

module.exports = router;
