const express = require("express");
const router = express.Router();

const controllers = require("../controllers/userLoginController");
router.get("/get",controllers.userLoginGet);
router.post("/post",controllers.userLoginPost);

module.exports = router;
