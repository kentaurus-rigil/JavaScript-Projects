function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}



function Vote_Function() {
	var Age, Can_vote;
	Age = document.getElementById("Age").value;
	Can_vote = (Age < 18) ? "You are too young":"You are old enough";
	document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML =
	"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
	" manufactured in " + Erik.Vehicle_Year;
}

function Student(Grade, Age, Gender, ESL) {
	this.Student_Grade = Grade;
	this.Student_Age = Age;
	this.Student_Gender = Gender;
	this.Student_ESL = ESL;
}
var Maple = new Student(8, 13, "Female", "doesn't attend ESL");
var Koa = new Student(6, 11, "Male", "attends ESL");
var Asa = new Student(3, 8, "Male", "attends ESL");
function Student_Summary() {
	document.getElementById("New_and_This").innerHTML =
	"Koa is in " + Koa.Student_Grade + "th grade. He is a " + Koa.Student_Gender +
	" age " + Koa.Student_Age + " and " + Koa.Student_ESL + ".";
}

function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
function Persons() {
	document.getElementById("Ma_and_Pa").innerHTML =
	"My father is" + myFather.firstName + myFather.lastName + myFather.age + " his eyes are " + myFather.eyeColor;
}

function count_Function() {
	document.getElementById("Counting").innerHTML = Count ();
	function Count () {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}

function addition_Function() {
	document.getElementById("Nested_Function").innerHTML = Count();
	function Count () {
		var Starting_point = 20;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}
			


