const NodeHelper = require("node_helper");
const Log = require("logger");

module.exports = NodeHelper.create({
  start: function() {
	this.mySpecialProperty = "So much wow!";
  Log.log(this.mySpecialProperty + " a node nice!");
  },
});
