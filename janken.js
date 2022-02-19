
function computerPlays() {
    let comp;
    if (Math.floor(Math.random() * 3) + 1 == 1) {
    comp = "rock";
    } else if (Math.floor(Math.random() * 3) + 1 == 2) {
    comp = "paper";
    } else {
    comp = "scissors";
    }
return comp;
}

function playRound(playerSelection, computerSelection) {
    let answer;
    if (playerSelection == computerSelection) {
        answer = (`Computer choose ${computerSelection}. Its a Tie!`)
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        answer = (`Computer choose ${computerSelection}. You win!`)
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        answer = (`Computer choose ${computerSelection}. You loose!`)
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        answer = (`Computer choose ${computerSelection}. You win!`)
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        answer = (`Computer choose ${computerSelection}. You loose!`)
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        answer = (`Computer choose ${computerSelection}. You win!`)
    } else {
        answer = (`Computer choose ${computerSelection}. You loose!`)
    }
return answer;
}

const rock = document.quertSelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound)
paper.addEventListener("click", playRound)
scissors.addEventListener("click", playRound)
