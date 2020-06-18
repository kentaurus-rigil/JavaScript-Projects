//Global Variable

//var X =10;
//function Add_numbers_1() {
	//document.write(20 + X + "<br>");
//}
//function Add_numbers_2() {
	//document.write(X + 100);
//}
//Add_numbers_1();
//Add_numbers_2();

//Local Variable

//function Add_numbers_1() {
	//var X = 10;
	//document.write(20 + X + "<br>");
//}
//function Add_numbers_2() {
	//document.write(X + 100);
//}
//Add_numbers_1();
//Add_numbers_2();

function Add_numbers_1(){
	var X = 10;
	console.log(15 + X);
}
function Add_numbers_2() {
	console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//if (1 < 2) {
	//document.write("The left number is smaller than the number on the right.")
//}

function get_Date() {
	if (new Date().getHours() < 18) {
	document.getElementById("Greeting").innerHTML = "How are you today?";
	}
}

//if (50 < 100) {
	//document.write("Bingo!")
//}

function Age_Function() {
	Age = document.getElementById("Age").value;
	if (Age >= 18) {
		Vote = "You are old enough to vote!";
	}
	else {
		Vote = "You are not old enough to vote!";
	}
	document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Year_Function() {
	Year = document.getElementById("Year").value;
	if (Year <= 1995) {
		Rent = "You are old enough to rent a car!";
	}
	else {
		Rent = "You are not old enough to rent a car!";
	}
	document.getElementById("What_year_were_you_born?").innerHTML = Rent;
}

function Time_function() {
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time < 0) {
		Reply = "It is morning time!";
	}
	else {
		Reply = "It is evening time.";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}
		