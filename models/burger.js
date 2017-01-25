orm = require("../config/orm.js");

var burger = {
	all : function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res)
		});
	},

	create: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function(res) {
			callback(res);
		});
	},

	update: function(colProps, whereVar, callback) {
		orm.updateOne("burgers", colProps, whereVar, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;