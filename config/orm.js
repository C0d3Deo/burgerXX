var connection = require("./connection.js");

function varSpotMaker(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	selectAll: function(tableVar, callback) {
		var queryString = "SELECT * FROM ??";

		connection.query(queryString, [tableVar], function(err, result) {
			if (err) {
				throw err;
			}
			console.log("I got " + result);
			callback(result);
		});
	},

	insertOne: function(tableVar, cols, vals, callback) {
		var queryString = "INSERT INTO " + tableVar + " (" + cols.toString() + ") " + "VALUES (" + varSpotMaker(vals.length) + ")";

		console.log("query formed: " + queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});

	},

	updateOne: function(tableVar, colProps, whereVar, callback) {
		var queryString = "UPDATE " + tableVar + " SET " + objToSql(colProps) + " WHERE " + whereVar;

		console.log("query formed: " + queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	}
};

module.exports = orm;