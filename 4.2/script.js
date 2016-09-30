/**
 * Created by siqi on 9/25/16.
 */

//Add a new box to blue boxes
d3.select(".blue-boxes")
	.append("div")
	.attr("class", "box")

//Add a new box to both blue and yellow
d3.selectAll(".box-container")
	.append("div")
	.attr("class", "box")
	.style("height", "300px");

d3.select(".yellow-boxes")
	.append("div")
	.attr("class", "box")
	.append("div")
	.attr("class", "inner")
	.style("width", "50%")
	.style("background", "red");

//Empty all the yellow boxes


//...then add a box back to yellow


//Change all the blue boxes to 150px high


//Change all the boxes to 50px high


//Give all the boxes a bottom border