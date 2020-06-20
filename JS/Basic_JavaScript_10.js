//While Loop
function Call_Loop() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}

//String Length Property
 function myFunction(){
	 var str = "Hello World!";
	 var n = str.lenth;
	 document.getElementById("demo").innerHTML = n;
 }
 
 //For Loop
 var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
 var Content = "";
 var Y;
 function for_Loop() {
	 for (Y = 0; Y < Instruments.length; Y++) {
	Content += Instruments[Y] + "<br>";
	 }
	 document.getElementById("List_of_Instruments").innerHTML = Content;
 }
 
 //Array
 function array_Function() {
	 var Cat_Picture = [];
	 Cat_Picture [0] = "sleeping";
	 Cat_Picture [1] = "playing";
	 Cat_Picture [2] = "eating";
	 Cat_Picture [3] = "purring";
	 document.getElementById("Array").innerHTML = "in this picture, the cat is " +
		Cat_Picture[2] + ".";
 }
 
 //CONST KEYWORD
 function constant_function(){
	 const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
	 Musical_Instrument.color = "blue";
	 Musical_Instrument.price = "$500";
	 Musical_Instrument.brand = "Fender"
	 document.getElementById("Constant").innerHTML = "The cost of the " +
		Musical_Instrument.type + " was " + Musical_Instrument.price + " and the brand was" + Musical_Instrument.brand;
 }
 
 //LET KEYWORD
 function let_Function()
 {
	let car = {
		car_make: "Taurus", 
		car_manufacturer: "Ford"
					
	}
	 
	document.getElementById("let").innerHTML = car.car_make;
 
 
 //Return Statement - Need to Fix
 function ret_statement(){
	return Math.PI;
}
 document.getElementById("return").innerHTML= ret_statement();
 
 
 
 //Create an Object using Let Method-Properties & Method-Need to fix
  
 let vehicle = {
	 make: "Dodge ",
	 model: "Viper ",
	 year: "2021 ",
	 color: "red ",
	description : function() {
		 return "The car is a " + this.year + this.color + this.make + this.model;
	 }
 };
 document.getElementById("Car_Object").innerHTML = vehicle.description();
 
 
 
 //Break Statement
 var text= "";
 var i;
 for(i = 0; i < 10; i++) {
	 if (i === 3) { break; }
	 text += "The number is " + i + "<br>";
 }
 document.getElementById("break").innerHTML = text;
 
 
 //Continue Statement
 var word= "";
 var j;
 for (j = 0; j < 10; j++) {
	 if(j === 3) { continue;}
	 word += "The number is " + j + "<br>";
 }
 document.getElementById("continue").innerHTML = word;
 }
 