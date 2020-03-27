const db = require("../database/dbConfig");

module.exports = {
  findById,
  findByUser,
  add
};

function findById(ID) {
  return db("users")
    .where({ ID })
    .then((response) => {
      return response[0];
    });
}

function findByUser(userString) {
  return db("users")
    .where({ username: userString })
    .first();
}

function add(userObj) {
  return db("users")
    .insert(userObj)
    .then((response) => {
      return findById(response[0]);
    });
}
