const checkboxes = document.querySelectorAll("input[type='checkbox']");
const lengthField = document.getElementById("length");
const output = document.getElementById("password-output");
const generateButton = document.getElementById("generate-password-button");
const timeRequired = document.getElementById("time-required");

let SETTINGS = {};
let VALID_CHARACTERS = [];
let length;
let password;
checkboxes.forEach(checkbox => {
  // gets the initial setting
  SETTINGS[checkbox.id] = checkbox.checked;
  checkbox.addEventListener("click", ({ target }) => {
    SETTINGS[target.id] = target.checked;
    VALID_CHARACTERS = getValidCharacters(combinations, SETTINGS);
    password = generatePassword(length, VALID_CHARACTERS).trim();
    output.value = password;
    timeRequired.innerText = calculateTimeRequired(
      length,
      VALID_CHARACTERS.length
    );
  });
});

lengthField.addEventListener("input", ({ target }) => {
  if (target.value < 40) {
    length = target.value;
  } else {
    length = 40;
  }

  password = generatePassword(length, VALID_CHARACTERS).trim();
  output.value = password;
  timeRequired.innerText = calculateTimeRequired(
    length,
    VALID_CHARACTERS.length
  );
});

generateButton.addEventListener("click", e => {
  output.value = generatePassword(length, VALID_CHARACTERS).trim();
  timeRequired.innerText = calculateTimeRequired(
    length,
    VALID_CHARACTERS.length
  );
  console.log(calculateTimeRequired(length, VALID_CHARACTERS.length));
});
