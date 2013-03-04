$(function(){
	/*steps
		1. grab string before space
		2. clear out the input
		3. put the contents before the space into a 'tag' div
		4. prepend to the container div
	*/
	$('#tagCheck').on('keypress', function(e){
		if((e.keyCode) === 32){parseString(e)}
	});
	var parseString = function(e)
	{
		console.log($(e.currentTarget).val());
	}
});