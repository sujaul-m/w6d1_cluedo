// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// the murder will be Miss Scarlett as she is the only character in this episode who is declared as the murderer




// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murder will be Professor Plum as the murderer is set as a constant value so you cant change the variable to Mrs Peacock




// Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// the murder in the first verdict will be Mrs Peacock as the function declareMurder is being called and that will return the murder set within the function
// the murder in the second verdict however will be Professor Plum as he is set as a global variable and when murderer is called it picks up the global and not the one within the declareMurder function as that is code blocked




// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// the first console.log will show all the suspects but suspect three will be colonel mustard instead of Mrs Peacock as the variable is changed within the function
// however the second console.log will show suspect three as Mrs Peacock as she is the global variable for suspect 3 as colonel mustard is code blocked to within the function



// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// the weapon will show as revolver as the changeWeapon function is called to change the weapon within the Object with the title 'weapon' to revolver from candle stick.



// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//the murder will be mr white as even tho the function changeMurderer is called when the function declareMurder is called it is passing the last global change for murder into the function which is mr white


// Episode 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the murder will be mr green as he has been globally set as the murder when declareMurder is called as there is no var or let before murderer for him



// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// the weapon will be candlestick as the candle stick is being changed to the murder weapon from lead pipe when the function is called as the inputed murder in unexpectedOutcome Colonol Mustard === scenario.murderer in the plot twist



// Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// the murder will be professor plum as the if statment is not being called before declaring the murderer




// extension

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeRoom = function() {
  scenario.room = 'Batcave';
}

const changeScenario = function() {
  scenario.murderer = 'Robin';
  scenario.room = 'Garage';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Batman';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Pasta Machine';
      }
    }

    unexpectedOutcome('Batman');
  }

  plotTwist('Garage');
}

const changeWeapon = function() {
  scenario.weapon = 'Toothpick';
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const declareRoom = function() {
  return `The murderer is ${scenario.room}.`;
}


changeScenario();
changeRoom();
changeScenario();
changeRoom();
changeWeapon();
const verdict1 = declareWeapon();
const verdict2 = declareMurderer();
const verdict3 = declareRoom();
console.log(verdict1);
console.log(verdict2);
console.log(verdict3);
