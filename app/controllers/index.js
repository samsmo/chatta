var db = require('./../../libs/connection');
module.exports = {
	name: 'index',
	model: db.useModel('playlists'),
	index: function(req, res){
		
		res.render('index', {title: 'hell yes', text: "once upon a timezzeze"});	
	}
}