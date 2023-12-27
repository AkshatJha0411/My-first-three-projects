const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function appendCharacter(character) {
  display.value += character;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Use a regular expression to validate input
    const isValidInput = /^[\d\+\-\*\/\.\s]*$/.test(display.value);

    if (isValidInput) {
      const result = eval(display.value);
      display.value = result;
    } else {
      throw new Error("Invalid input");
    }
  } catch (error) {
    display.value = "Error";
  }
}
