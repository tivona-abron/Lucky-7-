//Declare and Assign Variables

var dieA =1;
var dieB =1;

var target =7;
var numberOfRolls = 0;
var wins =0;
var losses = 0;



//Handle Events

$('#roll-dice').on('click', function(){
	//Invoke the getRandomNumber function to get a random number
	dieA = getRandomNumber();
	dieB = getRandomNumber();

	//Use the number to set the class of the die which you can see in the style.css

$('#dieA').attr('class', 'dice-' + dieA);
$('#dieB').attr('class', 'dice-' + dieB);
//Increment the total number of rolls by 1
numberOfRolls++
//Invoke the checkIfRollIsWinner function to see if

var isWinner = checkIfRollIsWinner(dieA, dieB);
if (isWinner){
	wins++;

}else{
	losses++;
}
console.log(wins, losses);
});

//Declare Functions

function getRandomNumber(){
	return Math.floor((Math.random() * 6) + 1);
}


function checkIfRollIsWinner(dieA, dieB){
	//See if the total of dieA and dieB equals the target
	if(dieA + dieB === target){

		return true;
	}else{
		return false;
	}
}