let express = require("express");
let router = express.Router();

let HandlerGenerator = require("../handlegenerator.js");
let middleware = require("../middleware.js");

HandlerGenerator = new HandlerGenerator();

/* GET home page. */
router.get("/", middleware.checkToken, HandlerGenerator.index);

router.post("/login", HandlerGenerator.login);

module.exports = router;
