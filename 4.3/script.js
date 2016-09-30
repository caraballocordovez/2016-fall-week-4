//Create <svg> element with appropriate width and height attributes
//Calculate the width and height of the <div.canvas>

var w = document.getElementById("canvas").clientWidth,
    h = document.getElementById("canvas").clientHeight;

console.log(w,h);

var paper = d3.select(".canvas")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

//4.3.6 Draw axes
//Lines
for (var x=0; x<=w; x+=100) {
	paper.append("line")
	.attr("x1", x)
	.attr("x2", x)
	.attr("y1", 0)
	.attr("y2", h)
	
}


//4.3.1 <circle>
paper	
	.append("circle")
	.attr("cx", 100)
	.attr("cy", 100)
	.attr("r", 50);

paper
	.append("circle")
	.attr("cx", 300)
	.attr("cy", 100)
	.attr("r", 50)
	.attr("class", "black-stroke");
	/* .style("fill", "none")
	.style("stroke", "black")
	.style("stroke-width", "2px"); */


//4.3.2 <rect>
paper
	.append("rect")
	.attr("x", 100)
	.attr("y", 300)
	.attr("width", 300)
	.attr("height", 100);

//4.3.3 <line> and <text>
paper	
	.append("line")
	.attr("x1", 500)
	.attr("y1", 200)
	.attr("x2", 700)
	.attr("y2", 300)
	.style("stroke", "black")
	.style("stroke-width", "2px");

paper
	.append("text")
	.attr("x", 500)
	.attr("y", 200)
	.text("500, 200")
	.style("fill", "red")
	.attr("text-anchor", "middle");


//4.3.4 <g>
var group = paper.append("g")
	.attr("class", "nested-circle");
	group.append("circle")
	.attr("r", 50);
group
	.append("circle")
	.attr("r", 10);
group
	.transition()
	.duration(5000)
	.attr("transform", "translate(400,400)")



//4.3.5 <path>
