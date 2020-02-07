let options = ['stone','scissors', 'paper'];

let stone = options[0];
let scissors = options[1];
let paper = options[2];

for (let i = 0; i < 1; i++) {
  let confirmation;

  let randomInteger = Math.floor(Math.random() * options.length);
  let computerStep = options[randomInteger];

  let userStep = prompt('Your turn! Stone, scissors or paper?', '');

  if (typeof userStep === 'string') {
    userStep = userStep.toLowerCase();
  } else {
    confirmation = confirm(`Hmmm...You didn't enter anything...
                            \nDo you really wanna to continue the game?`);
    if (confirmation) {
        i--;
        continue;
    } else {
        break;
    }
	}
	
  if (!options.includes(userStep)) {
    confirmation = confirm(`What did you write? You have just three options:
                            \nstone, scissors or paper! 
                            \nDo you wanna to continue the game?`);
    if (confirmation) {
        i--;
        continue;
    } else {
        break;
    }
	}
	
	let draw = userStep === computerStep;
	
  let win = (userStep === stone && computerStep === scissors) 
            || (userStep === scissors && computerStep === paper)
            || (userStep === paper && computerStep === stone);
  
  switch(true) {
    case win: 
      confirmation = confirm(`Your step was ${userStep}, computer step was ${computerStep}.
                              \nYou win!!!
                              \nDo you wanna to play the game again?`);
      break;
    case draw:
      confirmation = confirm(`Your step was ${userStep}, computer step was ${computerStep}.
                              \nDraw!!!
                              \nDo you wanna to play the game again?`);
      break;
    default:
      confirmation = confirm(`Your step was ${userStep}, computer step was ${computerStep}.
                              \nYou loose ((
                              \nDo you wanna to play the game again?`);
  }

  if (confirmation) {
    i--;
  }
}