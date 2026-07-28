# # 10 Sec Math Game

A fast-paced browser game where players solve addition problems before the timer reaches zero. Each correct answer increases the score and adds one second to the clock.

## Live Demo

[Play the game](Live-Demo-Placeholder)

## Features

- Generates random addition problems
- Adjustable difficulty range
- Ten-second countdown timer
- Adds one second for every correct answer
- Tracks the current score
- Saves the high score with `localStorage`
- Supports keyboard navigation
- Includes accessible live updates for dynamic content
- Responsive layout for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap 3
- Web Storage API

## Skills Demonstrated

- JavaScript DOM manipulation
- Event-driven programming
- jQuery
- Responsive web design
- Accessibility (WCAG best practices)
- Semantic HTML
- CSS Flexbox
- State management
- Browser storage with `localStorage`
- Code refactoring and modernization

## How to Play

1. Choose the maximum number using the difficulty slider.
2. Type the answer to the displayed addition problem.
3. The timer begins when you enter your first answer.
4. Each correct answer adds one point and one second.
5. Continue solving problems until the timer reaches zero.
6. Select **Play Again** to restart.

## Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/saragolbek/10SecMath.git
   ```

2. Open the project folder.

3. Open `index.html` in your web browser.

No installation or build process is required.

---

## Project Improvements

This project was originally created as an early JavaScript exercise and later refreshed to improve code quality, accessibility, and presentation.

### Updates Include

- Replaced outdated variable declarations with `let` and `const`
- Improved random number generation
- Connected the difficulty slider to both operands
- Added persistent high-score tracking using `localStorage`
- Added a game-over state and restart functionality
- Improved semantic HTML structure
- Added screen-reader announcements for dynamic content
- Added keyboard focus management
- Refactored repeated DOM queries
- Improved handling of empty input values
- Redesigned the user interface
- Added responsive styles for mobile devices

---

## Accessibility

Accessibility improvements include:

- Semantic page structure
- Proper heading hierarchy
- Form labels for user input
- `aria-live` regions for the timer, score, equation, and game-over message
- Keyboard focus management when the game ends and restarts
- Visible keyboard focus styles
- Support for users who prefer reduced motion

---

## What I Learned

This project helped reinforce my understanding of:

- DOM manipulation with jQuery
- Timer management using `setInterval()`
- JavaScript event handling
- Random number generation
- Browser storage with `localStorage`
- Semantic HTML
- Building accessible dynamic interfaces
- Responsive CSS design
- Refactoring and modernizing older JavaScript code

---

## Future Improvements

Possible future enhancements include:

- Additional math operations (subtraction, multiplication, and division)
- Difficulty presets
- A pause feature
- A leaderboard
- Automated testing

---

## Author

**Sara Perez**

GitHub: https://github.com/saragolbek