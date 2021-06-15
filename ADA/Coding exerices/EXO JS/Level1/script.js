// Creating a function that returns a random number
/*function nb_aleatoire(min, max)
{
	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
}*/

// 
/*
var minNumber = 1;
var maxNumber = 10;
var number2Find = nb_aleatoire (minNumber, maxNumber);

var nomberChoisit;
var msgPrompt = "Try finding the correct number between" + minNumber + " and " + maxNumber +" :";
var msgRate = "";
var nbSaisi = prompt("enter here");
// looping
while (nbSaisi != number2Find) {
	if (nbSaisi < number2Find)
	{
    alert("Try again");
    }
	else
	{
	alert("Try again");
	}
	nbSaisi = prompt (msgPrompt) ;
}
console.log ("Hey you did it");
*/


/*
var goodNumber = 4;
var playerNumber = prompt("Enter your number");

while (playerNumber !== goodNumber) {
	
if(playerNumber === goodNumber){
	alert("You did it!");
	window.stop();
}else{
	prompt("TRY AGAIN");
}
}
*/

//Déclaration des variables
var goodNumber = Math.floor(Math.random()*10)+1;
var playerNumber = prompt("Enter a number : ");

do{
	//playerNumber = prompt("blablabla");
	if(goodNumber == playerNumber){
		alert("You did it! you found the correct number ");
	}
	if(playerNumber<goodNumber){
		//alert("Step up your game it's higher");
		playerNumber = prompt("Step up your game it's higher");

	}
	/*if(playerNumber>goodNumber){
		//alert("Duh it's lower");
		playerNumber = prompt("Duh it's lower");
	}*/
	/*else{
		playerNumber = prompt("Try again you can do it");
	}*/
	else if(playerNumber>goodNumber){
		playerNumber = prompt("Duh it's lower");
		//playerNumber = prompt("Duh it's lower");
	}else{
		playerNumber = prompt("Did you enter a number ? (Try again)");
	}
}
while(playerNumber != goodNumber);
alert("You did it! the number was "+ goodNumber);
//window.close();

















/*
var goodNumber = Math.floor(Math.random()*10)+1;
var playerNumber = prompt("Enter : ");
do{
	if(goodNumber == playerNumber){
		alert("You did it! you found the correct number : " + goodNumber);
	}
	 if(playerNumber<goodNumber){
		alert("Step up your game it's higher");
	}
	 if(playerNumber>goodNumber){
		alert("Duh it's lower");
	}

	else{
		playerNumber = prompt("Try again your input is inappropriate");
	}
}*/