const orm = require("../config/orm.js");

const dbqueries = {
  getBurgers: function (cb) {
    orm.selectAll("burgers", function (results) {
      burgers = results;
      cb(results);
    });
  },
  addBurger: function (burger_name, cb) {
    orm.insertOne("burgers", ["burger_name"], [burger_name], function (
      results
    ) {
      cb(results);
    });
  },
  eatBurger: function (id, cb) {
    orm.updateOne("burgers", id, "devoured", true, function (results) {
      cb(results);
    });
  },
};

module.exports = dbqueries;
