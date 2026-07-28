$(document).ready(function() {

// Game State

  let currentQuestion;
  let interval;
  let timeLeft = 10;
  let score = 0;
  let highScore = Number(localStorage.getItem("highScore")) || 0;

  // Cached DOM Elements

  const $timeLeft = $("#time-left");
  const $score = $("#score");
  const $highScore = $("#highScore");
  const $finalScore = $("#final-score");
  const $gameOver = $("#game-over");
  const $userInput = $("#user-input");
  const $restartButton = $("#restart-button");
  const $range = $("#range");
  const $rangeValue = $("#rangeValue");
  const $equation = $("#equation");

  // Score and Timer Updates

  const updateTimeLeft = (amount) => {
    timeLeft += amount;
    $timeLeft.text(timeLeft);
  };

  const updateScore = (amount) => {
    score += amount;
    $score.text(score);
  };

  const updateHighScore = () => {
    highScore = score;

    // Save the high score so it persists after the browser is closed.
    localStorage.setItem("highScore", String(highScore));
    $highScore.text(highScore);
  };

  // Game Controls

  const endGame = () => {
    clearInterval(interval);
    interval = undefined;

    $finalScore.text(score);
    $gameOver.prop("hidden", false);
    $userInput.prop("disabled", true);

    // Move focus to the next available action for keyboard users.
    $restartButton[0].focus();
  };

  const startGame = () => {
    if (!interval && timeLeft > 0) {
      interval = setInterval(() => {
        updateTimeLeft(-1);

        if (timeLeft === 0) {
          endGame();
        }
      }, 1000);
    }
  };

  const restartGame = () => {
    interval = undefined;
    timeLeft = 10;
    score = 0;

    $timeLeft.text(timeLeft);
    $score.text(score);
    $userInput.val("").prop("disabled", false);
    $gameOver.prop("hidden", true);

    renderNewQuestion();

    // Return focus to the answer field so the player can resume immediately.
    $userInput[0].focus();
  };

  // Question Generation

  const randomNumberGenerator = (maximum) => {
    return Math.floor(Math.random() * (maximum + 1));
  };

  const questionGenerator = () => {
    const selectedRange = Number($range.val());
    const num1 = randomNumberGenerator(selectedRange);
    const num2 = randomNumberGenerator(selectedRange);

    return {
      answer: num1 + num2,
      equation: `${num1} + ${num2}`
    };
  };

  const renderNewQuestion = () => {
    currentQuestion = questionGenerator();
    $equation.text(currentQuestion.equation);
  };

   const checkAnswer = (userInput, answer) => {
    if (userInput !== answer) {
      return;
    }

    renderNewQuestion();
    $userInput.val("");
    updateTimeLeft(1);
    updateScore(1);

    if (score > highScore) {
      updateHighScore();
    }
  };

  // Event Listeners

  $range.on("input", function () {
    $rangeValue.text($(this).val());

    if (timeLeft > 0) {
      renderNewQuestion();
    }
  });

  $userInput.on("input", function () {
    const inputValue = $(this).val();

    // Prevent an empty field from being converted to the number 0.
    if (inputValue === "") {
      return;
    }

    startGame();
    checkAnswer(Number(inputValue), currentQuestion.answer);
  });

  $restartButton.on("click", restartGame);

  // Initialize Game

  $highScore.text(highScore);
  renderNewQuestion();
});
