function getPlayerNumber() {
    // Generate a random number between 0 and 9 for the computer's move
    const computerMove = Math.floor(Math.random() * 10);
    console.log(computerMove);

    // Get the text content of the HTML element with the id "target" as the player's move
    const move = document.querySelector(".target");

    const playerMove = move.value;



    // Initialize the 'result' variable
    let result = '';
    console.log("Player's Move:", playerMove);
    console.log("Computer's Move:", computerMove);


    // Check if the computer's move is equal to the player's move
    if (parseInt(computerMove) === parseInt(playerMove)) {
        result = 'You win';
    } else {
        result = 'You lose';
    }

    // Display the result in an HTML element with the class "result"
    document.querySelector(".result").innerHTML = result;
}
