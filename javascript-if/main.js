/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  var remainder = number % 2;
  return (remainder === 0);
}

function startsWithJ(string) {
  var firstLetter = string.split('');
  return (firstLetter[0] === 'J');
}

function isOldEnoughToDrink(person) {
  return (person.age >= 21);
}

function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  var msg;
  if ((pH >= 0) && (pH <= 6)) {
    msg = 'acid';
  } else if ((pH >= 8) && (pH <= 14)) {
    msg = 'base';
  } else if ((pH === 7)) {
    msg = 'neutral';
  } else {
    msg = 'invalid pH level';
  }
  return msg;
}

function introduceWarnerBro(name) {
  var msg;
  if ((name === 'yakko') || (name === 'wakko')) {
    msg = "We're the warner brothers!";
  } else if (name === 'dot') {
    msg = "I'm cute~";
  } else {
    msg = 'Goodnight everybody!';
  }
  return msg;
}
