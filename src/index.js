import getAnswerMsg from "test-msg-printer";

window.getAnswerMsg = getAnswerMsg;

const guessWrapper = document.getElementById("guess-wrapper");
const answerWrapper = document.getElementById("answer-wrapper");

const userInputBox = document.createElement("div");
userInputBox.className = "user-input-wrapper";

const guessInput = document.createElement("input");
guessInput.placeholder = "enter a number";
guessInput.type = "number";

const guessBtn = document.createElement("button");
guessBtn.innerText = "Guess!";

userInputBox.append(guessInput, guessBtn);
guessWrapper.appendChild(userInputBox);

guessBtn.addEventListener("click", () => {
  answerWrapper.innerHTML = "";

  const userGuess = guessInput.value;
  const userSetting = findSelectedInput();

  if (userGuess && userSetting) {
    const showAnswer = getAnswerMsg(userGuess, userSetting);
    showAnswer.className = "answerBox";
    answerWrapper.appendChild(showAnswer);

    setTimeout(() => {
      answerWrapper.removeChild(showAnswer);
    }, 2000);
  } else {
    alert("Please enter Level of challenge and your guess");
  }

  guessInput.value = "";
});

function findSelectedInput() {
  const selectedInput = document.querySelector('input[type="radio"]:checked');

  if (selectedInput) {
    return selectedInput.value;
  } else {
    console.log("No input");
  }
}
