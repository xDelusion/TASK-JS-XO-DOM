// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if(confirm(`Horraaay, ${winner} wins!`)){
     // The code here will be exectued if you press on OK button that will pop on the window 
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let isGameOver = false;

let counter = 1
function clickButton(index) {
  
  if(document.getElementById(`${index}`).innerHTML == "" ){

    if (counter % 2 === 0 ) {
      
      fillButton (index, "O") ;
      
    } else {
      fillButton(index, "X");
    }
    counter++
  }else{
    console.log("I AM NOT EMPTY YOU CANT CLICK MEEEEE!!")
  }
  if(isGameOver == true) {
    winningAlert("X")
  }

checkWinner();
}

function checkWinner() {

  const winningBlocks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  if (
document.getElementById(winningBlocks[0][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[0][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[0][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[1][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[1][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[1][2]).innerHTML == "X" )  
{
  isGameOver = true

} else if(
document.getElementById(winningBlocks[2][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[2][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[2][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[3][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[3][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[3][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[3][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[3][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[3][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[4][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[4][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[4][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[5][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[5][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[5][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[6][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[6][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[6][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
document.getElementById(winningBlocks[7][0]).innerHTML == "X" &&
document.getElementById(winningBlocks[7][1]).innerHTML == "X" &&
document.getElementById(winningBlocks[7][2]).innerHTML == "X" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[0][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[0][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[0][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[1][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[1][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[1][2]).innerHTML == "O" ) 
{
  isGameOver = true

} else if(
  document.getElementById(winningBlocks[2][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[2][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[2][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[3][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[3][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[3][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[3][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[3][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[3][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[4][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[4][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[4][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[5][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[5][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[5][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[6][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[6][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[6][2]).innerHTML == "O" ) 
{ 
  isGameOver = true

} else if (
  document.getElementById(winningBlocks[7][0]).innerHTML == "O" &&
  document.getElementById(winningBlocks[7][1]).innerHTML == "O" &&
  document.getElementById(winningBlocks[7][2]).innerHTML == "O" ) 
{ 
  isGameOver = true
 }
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
