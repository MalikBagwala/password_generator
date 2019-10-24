// Total List Of Combinations
const combinations = {
  lowerCase: {
    start: 97,
    end: 122
  },
  upperCase: {
    start: 65,
    end: 90
  },
  numbers: {
    start: 48,
    end: 57
  },
  symbols: [35, 36, 38, 64, 61]
};

// Generates a string based on the character arrays
function generatePassword(length = 10, validCharacters) {
  let i;
  let randomIdx;
  let passwordString = "";
  let randomElement;

  for (i = 0; i < length; i++) {
    // Grabs a random index between 0 and length of the valid characters  - 1
    randomIdx = random(0, validCharacters.length - 1);
    // Grabs the element at that position
    randomElement = validCharacters[randomIdx];
    // Appends it to the charcter value of the element
    passwordString += char(randomElement);
  }
  return passwordString;
}
