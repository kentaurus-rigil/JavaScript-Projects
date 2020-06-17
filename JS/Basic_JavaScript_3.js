function addition_Function () {
	var addition = 2 + 2;
	document.getElementById("addition_Function").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function () {
	var subtraction = 5 - 2;
	document.getElementById("subtraction_Function").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication () {
	var multiplication = 6 * 8;
	document.getElementById("multiplication").innerHTML = "6 x 8 = " + multiplication;
}

function division () {
	var division = 48 / 6;
	document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

function more_Math () {
	var math = (1 + 2) * 10 / 2 - 5;
	document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + Math;
}

function modulus_Operator() {
	var simple_Math = 25 % 6;
	document.getElementById("simple_Math").innerHTML = "When you divide 25 by 6 you have a remainder of : " + simple_Math;
}

function negation_Operator() {
	var x = 10;
	document.getElementById("x").innerHTML = -x;
}

function increment() {
	var y = 5;
	y++;
	document.getElementById("y").innerHTML = y++;
}

function decrement() {
	var z = 5.25;
	z--;
	document.getElementById("z").innerHTML = z--;
}

function random() {
	window.alert(Math.random());
}

function random_2() {
	window.alert(Math.random()*100);
}



