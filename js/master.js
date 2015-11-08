// Get JSON data
masterJSON = d3.json("master.json", function(error, data) {
	//console.log(data);
	var test = d3.selectAll("g circle");
	//console.log(data);
	//h2.ui.inverted
	var master = d3.selectAll("div.ui.medium.image.dimmable")
		.on("click", function() {
			data.masters.forEach(function(d) {
				if (d.name == master.select("h2").text()) {
					//console.log(d.name + "    " + master.select("h2").text());
					lightup(d.skill);
				};
			})
		})

	function lightup(skill) {
		var node = d3.selectAll("g.node")[0];
		skill.forEach(function(s) {
			node.forEach(function(n) {
				if (s.name == n.querySelector("text").textContent) {
					n.querySelector("circle").style.cssText = "fill:steelblue !important";
					s.children && lightup(s.children);
				};
			})
			//var n = node.select("text")
		})
	}
});