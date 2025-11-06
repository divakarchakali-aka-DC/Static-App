# Tic Tac Toe

A classic two-player grid game (X and O) with win detection and score tracking. Fully responsive and built for seamless play on any device.

## Features
- **Turn-Based Gameplay**: Alternate between X and O players.
- **Win/Draw Detection**: Automatically checks for three-in-a-row wins or draws.
- **Score Tracking**: Counts X wins, O wins, and draws across games.
- **Reset Functionality**: Clear the board and start a new game.
- **Interactive Grid**: Clickable cells with hover effects for better UX.

## Technologies Used
- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (vanilla for game logic).
- **Backend**: Node.js (simple HTTP server using built-in modules).
- **Icons & Fonts**: Font Awesome for navigation, Google Fonts (Inter) for typography.
- **Styling**: Tailwind CSS for responsive layouts, shadows, and transitions.

## Installation & Setup
1. Ensure Node.js is installed (version 14+ recommended).
2. Place `tic-tac-toe-server.js` and `tic-tac-toe.html` in the same directory.
3. Run the server: `node tic-tac-toe-server.js`.
4. Open your browser and navigate to `http://localhost:3001`.

## Usage
- Click on empty grid cells to place X or O (players alternate automatically).
- The game announces the winner or a draw in the message area.
- View cumulative scores below the grid.
- Use the "Reset Game" button to clear the board and play again.
- Navigate to Rock Paper Scissors via the menu link (if running on port 3000).

## Responsive Design Notes
- Grid adapts to screen size with Tailwind's `grid-cols-3` and `max-w-sm` for centering.
- Hover effects on cells for desktop; touch-optimized for mobile.
- Consistent with modern web standards for cross-device compatibility.

## Credits
Built as an example of interactive web apps with pure JavaScript logic. Draws inspiration from traditional games and responsive design best practices. No dependencies beyond CDNs.

Have fun! 🎉
