// Write a JavaScript program where the program takes a random integer between 1 and 10,
//  and the user is then prompted to input a guess number. The program displays a message "Good Work" 
//  if the input matches the guess number otherwise "Not matched".

function getPlayerNumber() {
    // Generate a random number between 0 and 9 for the computer's move
    const computerMove = Math.floor(Math.random() * 10);
    console.log(computerMove);

    
    const move = document.querySelector(".target");

    const playerMove = move.value;



    
    let result = '';
    console.log("Player's Move:", playerMove);
    console.log("Computer's Move:", computerMove);


    
    if (parseInt(computerMove) === parseInt(playerMove)) {
        result = 'You win';
    } else {
        result = 'You lose';
    }

    
    document.querySelector(".result").innerHTML = result;
}
