const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  start: function() {
	this.mySpecialProperty = "So much wow!";
	console.log("TEST MODULE: " + this.name);
  },
});
