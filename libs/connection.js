var mongoose = require("mongoose");

module.exports = {
	db: 'chatta',
	url:"mongodb://127.0.0.1/",
	useModel: function(model){
		if (mongoose.connection.ready !== 1) mongoose.connect(this.url+this.db);
		return require("./../app/models/" + model)(mongoose);
	}
}