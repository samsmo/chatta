$(function(){
	/*steps
		1. grab string before space
		2. clear out the input
		3. put the contents before the space into a 'tag' div
		4. prepend to the container div
	*/
	var tagArray = [],
		el = $('.tags'),

		parseString = function(e){
			var string = $(e.currentTarget).val().replace(/\s/g, '');
			if(string !== ""){
				tagArray.push(string);
				el.append('<span class="label label-inverse">'+string+'</span>')
			}
			$(e.currentTarget).val("");
		};
	$('#tagCheck').on('keyup', function(e){
		if((e.keyCode) === 32 ){parseString(e)}
	});
});