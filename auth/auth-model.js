const db = require("../database/dbConfig");

module.exports = {
  findById,
  add
};

function findById(ID) {
  return db("users")
    .where({ ID })
    .then((response) => {
      return response[0];
    });
}

function add(userOBJ) {
  return db("users")
    .insert(userOBJ)
    .then((response) => {
      return findById(ID);
    });
}
