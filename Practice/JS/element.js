setInterval("myFunction()", 1);

function myFunction() {
	var x = document.getElementById("demo");
	if (document.hasFocus()) {
		x.innerHtml = "The document has focus";
} else { 
	x.innerHTML = "The document DOES NOT have focus.";
}
}