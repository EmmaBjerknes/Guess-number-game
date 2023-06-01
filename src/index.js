import getAnswerMsg from "test-msg-printer";

window.getAnswerMsg = getAnswerMsg;

const guessWrapper = document.getElementById("guess-wrapper");
const answerWrapper = document.getElementById("answer-wrapper");

const guessInput = document.createElement("input");
guessInput.placeholder = "enter a number";
guessInput.type = "number";

const guessBtn = document.createElement("button");
guessBtn.innerText = "I think it is this one!";

guessWrapper.append(guessInput, guessBtn);

guessBtn.addEventListener("click", () => {
  answerWrapper.innerHTML = "";

  const userGuess = guessInput.value;
  const userSetting = findSelectedInput();

  console.log(userGuess, userSetting);

  if (userGuess && userSetting) {
    const showAnswer = getAnswerMsg(userGuess, userSetting);
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
    console.log(selectedInput.value);
    return selectedInput.value;
  } else {
    console.log("No input");
  }
}
