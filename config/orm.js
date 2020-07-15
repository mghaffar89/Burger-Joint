const connection = require("./connection.js");

const orm = {
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw error;
      cb(result);
    });
  },

  insertOne: function (tableName, column, value, cb) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, columns, data], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (table, id, column, newvalue, cb) {
    const queryString = "UPDATE ?? SET ?? = ? where id = ?;";
    connection.query(queryString, [table, column, newvalue, id], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
