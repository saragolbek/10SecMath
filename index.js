$(document).ready(function() {
  let currentQuestion;
  let interval;
  let timeLeft = 10;
  let score = 0;
  let highScore = Number(localStorage.getItem("highScore")) || 0;

  const updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  };

  const updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
  };

  const updateHighScore = function () {
    highScore = score;
    localStorage.setItem("highScore", String(highScore));
    $("#highScore").text(highScore);
  };

  const endGame = function () {
    clearInterval(interval);
    interval = undefined;

    $("#final-score").text(score);
    $("#game-over").prop("hidden", false);
    $("#user-input").prop("disabled", true);

    $("#restart-button")[0].focus();
  };

  const startGame = function () {
    if (!interval && timeLeft > 0) {
      interval = setInterval(function () {
        updateTimeLeft(-1);

        if (timeLeft === 0) {
          endGame();
        }
      }, 1000);
    }
  };

  const restartGame = function () {
    timeLeft = 10;
    score = 0;

    $("#time-left").text(timeLeft);
    $("#score").text(score);
    $("#user-input").val("").prop("disabled", false);
    $("#game-over").prop("hidden", true);

    renderNewQuestion();
    $("#user-input")[0].focus();
  };

  const randomNumberGenerator = function (maximum) {
    return Math.floor(Math.random() * (maximum + 1));
  };

  const questionGenerator = function () {
    const question = {};
    const selectedRange = Number($('#range').val());
    const num1 = randomNumberGenerator(selectedRange);
    const num2 = randomNumberGenerator(selectedRange);

    question.answer = num1 + num2;
    question.equation = `${num1} + ${num2}`;

    return question;
  };

  const renderNewQuestion = function () {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  };

  const checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $('#user-input').val('');
      updateTimeLeft(1);
      updateScore(1);

      if (score > highScore) {
        updateHighScore();
      }
    }
  };

  $(document).on('input', '#range', function () {
    $('#rangeValue').text($(this).val());
    renderNewQuestion();
  })

  $('#user-input').on('keyup', function () {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

  $("#restart-button").on("click", function () {
    restartGame();
  });

  $("#highScore").text(highScore);
  renderNewQuestion();
});
