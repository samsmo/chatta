var db = require('./../../libs/connection'),
	model= db.useModel('playlists').PlayList;
module.exports = {
	name: 'index',
	index: function(req, res, next){
		
		model.findOne({},{},{'created_at': -1}, function(err, post){
			if(err || !post) return
			console.log(post);
		});
		res.render('index', {title: 'Chatta', text: "create a playlist!"});	
	}
}