// Get JSON data
masterJSON = d3.json("master.json", function(error, data) {
	console.log(data);
	var test = d3.selectAll('g circle')
	console.log(test);
});