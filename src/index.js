console.log("Herp");

const guessWrapper = document.getElementById("guess-wrapper");
const settingsWrapper = document.getElementById("settings-wrapper");

// mock up for setting difficulty lvl later on
function findSelectedInput() {
  const selectedInput = document.querySelector('input[type="radio"]:checked');

  if (selectedInput) {
    console.log(selectedInput.value);
  } else {
    console.log("No input");
  }
}
