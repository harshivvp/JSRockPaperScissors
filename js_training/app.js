let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const rand_val = Math.floor(Math.random() * 3);
    return choices[rand_val]
}

function convLetterToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else { return "Scissors"; }
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "User WON! \n" + convLetterToWord(user) + " beats " + convLetterToWord(computer);
    document.getElementById(user).classList.add('win_color');
    setTimeout(() => document.getElementById(user).classList.remove('win_color'), 1000);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "User LOST! " + convLetterToWord(computer) + " beats " + convLetterToWord(user);
    document.getElementById(user).classList.add('lose_color');
    setTimeout(() => document.getElementById(user).classList.remove('lose_color'), 1000);
}

function draw(user, computer) {
    result_p.innerHTML = "DRAW! :'<";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }

}


function main() {
    rock_div.addEventListener("click", function() {
        game("r");          
    });
    paper_div.addEventListener("click", function() {
        game("p");
    });
    scissors_div.addEventListener("click", function() {
        game("s");
    });
}

main();