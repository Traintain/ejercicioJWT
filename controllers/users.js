const mdbconn = require("../conn.js");

function getUsuarios() {
  return mdbconn.conn().then((client) => {
    return client.db("mydb").collection("UserLogin").find({}).toArray();
  });
}

function insertProduct(product) {
  return mdbconn.conn().then((client) => {
    return client.db("isis3710").collection("productos").insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}

module.exports = [getUsuarios, insertProduct];
