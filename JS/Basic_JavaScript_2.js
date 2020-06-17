var Fruit = "With Peels", Apple = "Red", Banana = "Yellow", Orange = "Orange"; //Assign three variables
document.write(Banana);					//Use a variable

var apples = "apples are red.";  //Define variable
var apples = apples.fontcolor("red");
document.write(apples);

function Orange() {				//Defining a function and naming it
	var str = "Oranges are Orange!";		//Defining a variable and giving it a 
											//string value
	var result = str.fontcolor("orange");	//Using the fontcolor method on
											//str variable
	document.getElementById("Orange_Text").innerHTML = result;  //Putting the value
																//of result into HTML element with "Orange_Text" id
}

function myFunction() {
	var sentence = "I am learning";
	sentence += " a lot from this book!";
	document.getElementById("Concatenate").innerHTML = sentence;
}