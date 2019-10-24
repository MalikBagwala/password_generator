const checkboxes = document.querySelectorAll("input[type='checkbox']");
const lengthField = document.getElementById("length");
const output = document.getElementById("password-output");
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
  });
});

lengthField.addEventListener("input", ({ target }) => {
  length = target.value;
  password = generatePassword(length, VALID_CHARACTERS).trim();
  output.value = password;
});
