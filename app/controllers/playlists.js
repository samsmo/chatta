module.exports = {
	name: 'playlists',
	create: function(req, res){
		console.log(req.body);
		res.render('index',{title: 'chatta', text:req.body});
	}
}