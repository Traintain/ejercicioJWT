var express = require("express");
var router = express.Router();
var [getUsuarios] = require("../controllers/users.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/list", async function (req, res, next) {
  const usuarios = await getUsuarios();
  res.send(usuarios);
});

module.exports = router;
