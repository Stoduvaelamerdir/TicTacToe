# Design Report

## User requirements

As a user I want to :
1. Start a new game from scratch
2. See the board on my screen 
3. Be notified when it is my turn to play
4. Be able to see my move on the screen
5. Be able to see my score
6. Be able to see my opponents score
7. Be notified when the game ends in a win
8. Be notified when the game ends in a draw
9. Reset the game, making both scores 0
10. Continue to a new game once the current one is finished

## Implementation

Start a new game from scratch
- Initiliaze an empty array of size 9
- Set player scores to 0
- Set playerTurn to X

See the board on my screen 
- Create a table in html 
- Style it using css

Be notified when it is my turn to play
- Create a variable that rotates between true and false
- If true, it's X's turn, and if false then it's O's turn

Be able to see my move on the screen
- When player clicks empty tile, insert into the table to the appropriate row and column a value depending on which player was currently playing

Be able to see my score
- A variable will be created to that handles the players score, incrementing with each win

Be able to see my opponents score
- Same as above

Be notified when the game ends in a win
- A function will be created that checks for win conditions after each turn
- If the condition is met a string will be displayed, declaring the winner

Be notified when the game ends in a draw
- Once 9 moves have been made and no win condition met, we will declare a draw
- A string will be displayed, declaring the draw

Reset the game, making both scores 0
- There will be a clickable button that, once clicked, clears the board and resets the scores

Continue to a new game once the current one is finished
- Once win/draw conditions will be met, a button will appear
- This button will reset the board, and increment the winning players score