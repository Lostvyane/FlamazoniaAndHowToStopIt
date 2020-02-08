function selected(number) {
	if (number == 1) {
		document.getElementById("vcard").style.display = "block";
		document.getElementById("aecard").style.display = "none";
		document.getElementById("card1").style.display = "block";
		document.getElementById("card2").style.display = "none";
		document.getElementById("seccode").style.display = "block";
		document.getElementById("seccode1").style.display = "block";
	}
	else {
		document.getElementById("vcard").style.display = "none";
		document.getElementById("aecard").style.display = "block";
		document.getElementById("card1").style.display = "none";
		document.getElementById("card2").style.display = "block";
		document.getElementById("seccode").style.display = "block";
		document.getElementById("seccode1").style.display = "block";
	}
}

function remove() {
	document.getElementById("vcard").style.display = "none";
	document.getElementById("aecard").style.display = "none";
	document.getElementById("card1").style.display = "none";
	document.getElementById("card2").style.display = "none";
	document.getElementById("seccode").style.display = "none";
	document.getElementById("seccode1").style.display = "none";
}

function home() {
	alert("Buhbye!!");
}