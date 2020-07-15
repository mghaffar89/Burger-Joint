const connection = require("./connection.js");

const orm = {
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, function (error, result) {
      if (error) throw error;
      cb(result);
    });
  },

  insertOne: function (tableName, column, value, cb) {
    const queryString = "INSERT INTO ";
  },
};
