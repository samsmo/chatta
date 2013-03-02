var controller = require('./../controllers/index');

module.exports = {
	name: 'index',
	index: function(req, res){
		controller.index(req, res);
	},
	show: function(req, res){
		console.log('ogogoogog');
	}
}