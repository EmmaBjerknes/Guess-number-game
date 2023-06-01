import getAnswerMsg from "test-msg-printer";

window.getAnswerMsg = getAnswerMsg;

const guessWrapper = document.getElementById("guess-wrapper");
const answerWrapper = document.getElementById("answer-wrapper");

const guessInput = document.createElement("input");
guessInput.type = "number";

const guessBtn = document.createElement("button");
guessBtn.innerText = "I think it is this one!";

guessWrapper.append(guessInput, guessBtn);

guessBtn.addEventListener("click", () => {
  answerWrapper.innerHTML = "";

  const userGuess = guessInput.value;

  if (userGuess) {
    const showAnswer = getAnswerMsg(userGuess);
    answerWrapper.appendChild(showAnswer);

    setTimeout(() => {
      answerWrapper.removeChild(showAnswer);
    }, 2000);
  }
});

// mock up for setting difficulty lvl later on
function findSelectedInput() {
  const selectedInput = document.querySelector('input[type="radio"]:checked');

  if (selectedInput) {
    console.log(selectedInput.value);
    return selectedInput.value;
  } else {
    console.log("No input");
  }
}
