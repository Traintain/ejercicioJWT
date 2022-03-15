var express = require("express");
var router = express.Router();
var [getUsuarios, getUsuario] = require("../controllers/users.js");
const HandlerGenerator = require("../handlegenerator.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/list", async function (req, res, next) {
  const usuarios = await getUsuarios();
  res.send(usuarios);
});

router.get("/oneUser", async function (req, res, next) {
  const usuario = await getUsuario(req.body.username, req.body.password);
  res.send(usuario);
});

module.exports = router;
