var Family = "The Arizzinis", Dad = "Jeremiah", Mom = "Hermoine",
	Daughter = "Penny", Son = "Zorro";
document.write(Dad);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3+3);

function My_First_Function() {				//Defining a function and naming it
	var str = "This text is green!";		//Defining a variable and giving it a 
											//string value
	var result = str.fontcolor("green");	//Using the fontcolor method on
											//str variable
	document.getElementById("Green_Text").innerHTML = result;  //Putting the value
																//of result into HTML element with "Green_Text" id
}

function My_Second_Function() {				//Defining a function and naming it
	var str = "This text is red!";		//Defining a variable and giving it a 
											//string value
	var result = str.fontcolor("red");	//Using the fontcolor method on
											//str variable
	document.getElementById("Red_Text").innerHTML = result;
}
	

		
		
		
		
		
