### Game Logic Optimization

To improve efficiency, the game checks for a winning condition only after the
minimum possible number of moves has been played.

In Tic-Tac-Toe, a win is only possible after **5 moves** (3 by Player X and 2 by Player O).
To avoid unnecessary computations, the win-check logic is executed only when the
move counter reaches 5 or more.

This small optimization reduces redundant checks and reflects an understanding
of game-state constraints.
