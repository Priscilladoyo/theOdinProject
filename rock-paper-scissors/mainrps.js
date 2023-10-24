const options = ["rock", "paper", "scissors"]; //make an 'options' array for choices

function getComputerChoice(){ //make the computer's play
    const choice = options[Math.floor(Math.random() * options.length)]; //randomly return the 'options'
    return choice;
}

function checkWinner(playerSelection, computerSelection){ //check who is the winner
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){ //check a single game
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!";
    } else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){ 
    let validatedInput = false; //check if the inputed word is valid
    while(validatedInput == false){
        const choice = prompt("Type Rock, Paper, or Scissors");
        if(choice == null){
            continue; //keep the prompt prompting
        }
        const choiceInLower = choice.toLowerCase(); //make it case-insensitive
        if(options.includes(choiceInLower)){ //if the 'choiceInLower' which the inputed word is in 'options' 
            validatedInput = true; //update 'validatedInput' to true
            return choiceInLower; //return the inputed word
        }
    }
}

function game(){ //initiate the game and manages the game flow
    let scorePlayer = 0; //keeps track for the player score
    let scoreComputer = 0; //keeps track for the computer score
    for(let i = 0; i < 5; i++){ //make the game stop after 5 times
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------------------");
        if(checkWinner(playerSelection, computerSelection) == "Player"){ 
            scorePlayer++; //update the player score
        } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++; //update the computer score  
        }
    }
    //displaying the result
    console.log("Game Over");
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!");
    } else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!");
    } else {
        console.log("We have a tie!");
    }
}

game();
