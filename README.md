# Rock Paper Scissors

A fun, interactive web game where you challenge the computer in the classic Rock Paper Scissors showdown. Built with responsive design to ensure compatibility across all devices.

## Features
- **Interactive Gameplay**: Choose Rock, Paper, or Scissors with clickable buttons.
- **Real-Time Feedback**: Displays your choice, the computer's choice, and the result (win, lose, or draw).
- **Score Tracking**: Keeps count of wins, losses, and draws.
- **Reset Functionality**: Reset scores and start fresh.
- **Responsive UI**: Mobile-first design with hover effects and smooth transitions.

## Technologies Used
- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (vanilla for game logic).
- **Backend**: Node.js (simple HTTP server using built-in modules).
- **Icons & Fonts**: Font Awesome for hand icons, Google Fonts (Inter) for clean typography.
- **Styling**: Tailwind CSS for responsive grids, buttons, and layouts.

## Installation & Setup
1. Ensure Node.js is installed (version 14+ recommended).
2. Place `rock-paper-scissors-server.js` and `rock-paper-scissors.html` in the same directory.
3. Run the server: `node rock-paper-scissors-server.js`.
4. Open your browser and navigate to `http://localhost:3000`.

## Usage
- Click one of the three buttons (Rock, Paper, Scissors) to make your choice.
- View the results in the display sections.
- Check your score in the wins/losses/draws counters.
- Use the "Reset Score" button to clear stats.
- Navigate to Tic Tac Toe via the menu link (if running on port 3001).

## Responsive Design Notes
- Uses Tailwind's responsive classes (e.g., `sm:flex-row` for button layouts on larger screens).
- Touch-friendly buttons with scale animations on hover.
- Optimized for phones, tablets, and desktops with flexible grids.

## Credits
A simple demonstration of client-side game logic and responsive web design. Inspired by classic games and modern UI patterns. No external libraries beyond CDNs.

Enjoy playing! 🚀
