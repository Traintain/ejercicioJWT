const mdbconn = require("../conn.js");

function getUsuarios() {
  return mdbconn.conn().then((client) => {
    return client.db("mydb").collection("UserLogin").find({}).toArray();
  });
}

function getUsuario(username, password) {
  return mdbconn.conn().then((client) => {
    return client
      .db("mydb")
      .collection("UserLogin")
      .find({ username: username, password: password })
      .toArray();
  });
}

function insertProduct(product) {
  return mdbconn.conn().then((client) => {
    return client.db("isis3710").collection("productos").insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}

module.exports = [getUsuarios, getUsuario];
