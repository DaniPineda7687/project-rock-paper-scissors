const option1= "paper";
const option2= "rock";
const option3= "scissors";
let userPoints=0;
let computerPoints=0;

const computerPlay=()=>{
    let options = ["rock","paper","scissors"];
    let optionComputer = Math.floor(Math.random()*3);
    return options[optionComputer];
      
}
function optionPlayer(){ 
    let option= prompt("What do you choose: rock, paper or scissors");
    while(!(option==option1||option==option2||option==option3)){
        console.log("Enter a valid option (rock, paper or scissors)");
        option= prompt("What do you choose: rock, paper or scissors"); 
    }
    return option.toLowerCase();
}
function playRound(userSelection, pcSelection){
        if(userSelection==pcSelection){
            userPoints+=0;
            computerPoints+=0;
            return `It's a tie - User option ${userSelection} - Computer Option: ${pcSelection}`;          
        }else if((userSelection.toLowerCase()==option1)&&(pcSelection==option2)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection.toLowerCase())==option1&&(pcSelection==option3)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }else if((userSelection.toLowerCase())==option2&&(pcSelection==option1)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }else if((userSelection.toLowerCase())==option2&&(pcSelection==option3)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection.toLowerCase())==option3&&(pcSelection==option1)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection.toLowerCase())==option3&&(pcSelection==option2)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }
}
function result(){
    if(userPoints==computerPoints){
        return console.log("It's a tie");
    }else if(userPoints>computerPoints){
        return console.log("User wins!");
    }else{
        return console.log("Computer wins!");
    }
}
function game(){
    for(let i=0;i<5;i++){
        let playerSelection = optionPlayer();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        console.log(` User points ${userPoints} - Computer points ${computerPoints}`);
    }
    result();
}
game();
