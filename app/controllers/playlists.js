module.exports = {
	name: 'playlists',
	create: function(req, res){
		var tags;
		tags = req.body.tags.split(',');
		console.log(tags);
		//res.render('index',{title: 'chatta', text:req.body});
	}
}