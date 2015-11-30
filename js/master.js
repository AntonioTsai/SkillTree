function masterList(url) {
	masterListJSON = d3.json(url, function(err, data) {
		//console.log(data);
		var tempMaster = '<div class="ui dimmer"><div class="content"><div class="center"><h2 class="ui inverted header"></h2><p></p></div></div></div><img class="ui image" src="">';

		//var master = d3.select("div.ui.inverted.segment").append("div")
		//		.attr("class", "ui medium image")
		//		.html(tempMaster);
		//console.log(master);

		var master = d3.select("div.ui.inverted.segment").selectAll("div")
				.data(data)
			.enter().append("div")
				.attr("class", "ui medium image")
				.html(tempMaster);

		master.select("img.image")
			.attr("src", function(d) {return d.photo;} )
		master.select("div.center h2").text(function(d) {return d.name;} )
		master.select("div.center p").text(function(d) {return d.info;} );


		$('.inverted.segment .image').dimmer({
		    on: 'hover'
		  });
	});
}

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
		})
	}
});