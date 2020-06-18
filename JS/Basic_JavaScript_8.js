//Concato Method
function full_Sentence() {
	var part_1 = "I have ";
	var part_2 = "made this ";
	var part_3 = "into a complete ";
	var part_4 = "sentence.";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);
	document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method

function slice_Method() {
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section = Sentence.slice(27,33);
	document.getElementById("Slice").innerHTML = Section;
}

//String toUpperCase()Method

function toUpperCase_Method() {
	var str = "javascript is fun!";
	var res = str.toUpperCase();
	document.getElementById("toUpperCase").innerHTML = res;
}

//String search() Method

function search_Method() {
	var str = "Bach is one of my favorite composers.";
	var n = str.search("Bach");
	document.getElementById("search").innerHTML = n;
}

//Number Methods
function string_Method() {
	var X =182;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//ToPrecisiono Method

function precision_Method() {
	var X = 12938.3012987376112;
	document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() Method

function fixed_Method() {
	var num = 5.56789;
	var n = num.toFixed(2);
	document.getElementById("Fixed").innerHTML = n;
}

//String valueOf() Method

function valueOf_Method() {
	var str = "This is the value of the string!";
	var res = str.valueOf();
	document.getElementById("Value").innerHTML = res;
}






