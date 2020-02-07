let options = ['stone','scissors', 'paper'];

let stone = options[0];
let scissors = options[1];
let paper = options[2];
/* 
let userStep = prompt('Your turn!Stone, scissors or paper?', '');

if (typeof userStep === 'string') {
    userStep = userStep.toLowerCase();
} else {
    alert('What did you write? You have just three options!');
}

let randomInteger = Math.floor(Math.random() * options.length);

let computerStep = options[randomInteger]; */



for (let i = 0; i < 1; i++) {
    let confirmation;
    let userScore;
    let computerScore;

    let userStep = prompt('Your turn! Stone, scissors or paper?', '');

    if (typeof userStep === 'string') {
        userStep = userStep.toLowerCase();
    } else {
        alert('Try again');
        confirmation = confirm('Do you wanna to continue the game?');
        if (confirmation) {
            i--;
            continue;
        } else {
            break;
        }
        
    }

    if (!(userStep === stone || userStep === scissors || userStep === paper)) {
        alert('What did you write? You have just three options! Try again');
        confirmation = confirm('Do you wanna to continue the game?');
        if (confirmation) {
            i--;
            continue;
        } else {
            break;
        }
    }

    let randomInteger = Math.floor(Math.random() * options.length);
    let computerStep = options[randomInteger];

    if (userStep === stone && computerStep === stone) {
        userScore = 1;
        computerScore = 1;
    } else if (userStep === stone && computerStep === scissors) {
        userScore = 1;
        computerScore = 0;
    } else if (userStep === stone && computerStep === paper) {
        userScore = 0;
        computerScore = 1;
    } else if (userStep === scissors && computerStep === stone) {
        userScore = 0;
        computerScore = 1;
    } else if (userStep === scissors && computerStep === scissors) {
        userScore = 1;
        computerScore = 1;
    } else if (userStep === scissors && computerStep === paper) {
        userScore = 1;
        computerScore = 0;
    } else if (userStep === paper && computerStep === stone) {
        userScore = 1;
        computerScore = 0;
    } else if (userStep === paper && computerStep === scissors) {
        userScore = 0;
        computerScore = 1;
    } else if (userStep === paper && computerStep === paper) {
        userScore = 1;
        computerScore = 1;
    } else {
        alert('Smth got wrong!!!');
    }

    if (userScore > computerScore) {
        alert (`Your step was ${userStep}, computer step was ${computerStep}. You win`);
    } else if (userScore < computerScore) { 
        alert (`Your step was ${userStep}, computer step was ${computerStep}. You loose`);
    } else if (userScore === computerScore) {
        alert (`Your step was ${userStep}, computer step was ${computerStep}. Draw`)
    }

    confirmation = confirm('Do you wanna to continue the game?');
    
    if (confirmation) {
        i--;
    }
}