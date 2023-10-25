/*
playCraps is a function used to simulate a craps game.
use for the week3 assignment
*/
function playCraps(){
    console.log("playCraps() started");
    //roll the dice
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2;
    //find sum of the two dice
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum;

    //if sum = 7 or 11, they lose
    if(sum == 7 || sum == 11){
        document.getElementById("finRes").innerHTML = "You lose! Please try again.";
    }
    //if sum doubles and even, then they win
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("finRes").innerHTML = "You WIN! Great job.";
    }
    //otherwise, they draw
    else{
        document.getElementById("finRes").innerHTML = "You did not win or lose. Try your luck again.";
    }
}
