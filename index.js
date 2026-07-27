$(document).ready(function() {
  let currentQuestion;
  let interval;
  let timeLeft = 10;
  let score = 0;
  let highScore = 0;

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
    $('#highScore').text(highScore);
  }

 

  const startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
      }

      interval = setInterval(function () {
        updateTimeLeft(-1);

        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);
    }
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
        updateHighScore(score);
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

  renderNewQuestion();
});
