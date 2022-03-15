let express = require("express");
let router = express.Router();

let HandlerGenerator = require("../handlegenerator.js");
let middleware = require("../middleware.js");
var [getUsuarios] = require("../controllers/users.js");

HandlerGenerator = new HandlerGenerator();

/* GET home page. */
router.get("/", middleware.checkToken, HandlerGenerator.index);

router.post("/login", HandlerGenerator.login);

router.get("/list", async function (req, res, next) {
  const usuarios = await getUsuarios();
  res.send(usuarios);
});

module.exports = router;
