
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");


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

function action(e) {
    alert(e.target.id)
    let action;
    if (e.target.id == "rock") {
        action = "rock"
    } else if (e.target.id == "paper") {
        action = "paper"
    } else if (e.target.id == "scissors") {
        action = "scissors"
    }
    return action
}
const section = document.querySelector("section")
section.addEventListener("click", action)


function playRound(playerSelection=action(), computerSelection=computerPlays()) {
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
    alert(playerSelection)
    alert(computerSelection)
    alert(answer);
    result.innerText = answer;
return answer;
}





section.addEventListener("click", playRound)

