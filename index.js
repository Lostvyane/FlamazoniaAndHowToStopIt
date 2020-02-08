document.getElementById("hoverme").onmouseover = function() {mouseOver()}
document.getElementById("hoverme").onmouseout = function() {mouseOut()}

function mouseOver() {
	document.getElementById("Red").style.color = "#d6113c";
	document.getElementById("Red").style.transition = "0.7s";
	document.getElementById("reveal1").style.display = "inline-block";
	document.getElementById("reveal2").style.display = "inline-block";
}

function mouseOut() {
	document.getElementById("Red").style.color = "black";
	document.getElementById("reveal1").style.display = "none";
	document.getElementById("reveal2").style.display = "none";
}