
//declaring global variables
var userScore = 0, computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// game function for logic od winning losing  
function game(userChoice) {
    const compChoice = computerChoice();
    const res = userChoice + compChoice;
    if (res === 'rs' || res === 'pr' || res === 'sp') {
        win(userChoice, compChoice);
    }
    else if (res === 'rr' || res === 'pp' || res === 'ss') {
        draw(userChoice, compChoice);
    }
    else lose(userChoice, compChoice);
}
function win(userInput, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors. You Win ✅🎉`;
    }
    else if (userInput === 'p' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock. You Win ✅🎉`;
    }
    else if (userInput === 's' && compChoice === 'p') {
        result_p.innerHTML = `Computer chosed Paper. You Win ✅🎉`;
    }
    //Using js delay
    document.getElementById(userInput).classList.add('win');
    setTimeout(function () { document.getElementById(userInput).classList.remove('win'); }, 350);
}
function lose(userInput,compChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'p') {
        result_p.innerHTML = "Computer chosed Paper 📜 . You Lost ❌";
    }
    else if (userInput === 'p' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors ✂ . You Lost ❌`;
    }
    else if (userInput === 's' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock ⬛ . You Lost ❌`;
    }
    document.getElementById(userInput).classList.add('lose');
    setTimeout(function () { document.getElementById(userInput).classList.remove('lose'); }, 350);
}
function draw(userInput,compChoice)
{
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'r') {
        result_p.innerHTML = `Computer chosed Rock ⬛ . It's a Draw.`;
    }
    else if (userInput === 'p' && compChoice === 'p') {
        result_p.innerHTML = `Computer chosed Paper 📜 . It's a Draw.`;
    }
    else if (userInput === 's' && compChoice === 's') {
        result_p.innerHTML = `Computer chosed Scissors ✂ . It's a Draw.`;
    }
    document.getElementById(userInput).classList.add('draw');
    setTimeout(function () { document.getElementById(userInput).classList.remove('draw'); }, 350);
}
function computerChoice()
{
    const choices = ['r','p','s'];  
    return choices[Math.floor(Math.random()*3)];
}
//main execution will start here
function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();

