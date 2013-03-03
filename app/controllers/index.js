module.exports = {
	name: 'index',
	model: '',
	index: function(req, res){
		res.render('index', {title: 'hell yes', text: "once upon a timezzeze"});
	}
}