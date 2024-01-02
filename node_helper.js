const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  start: function() {
	this.mySpecialProperty = "So much wow!";
	Log.log(this.name + " is started!");
},
});
