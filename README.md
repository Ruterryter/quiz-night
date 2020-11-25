
## Desription
The assignmenet was to build a small quiz game as a single page application. When the game begins, the player is presented with ten questions, one by one, from a pool of more than ten questions. The questions are to be presented in a random order, but the player should not receive the same question twice until all the other questions has been answered. A question can have a text or an image, and four alternative answers. Only one of the answers is correct.
The player has 15 seconds to answer each question. The remaining time should be visible to the player. When the time is up for a question, that question is considered unanswered. The player has two lifelines, one called “50/50” that removes two incorrect answers, and one called “+10 s” that gives the player ten extra seconds for the current question. Each lifeline can only be used once during a game.
Once the player has answered all questions (or run out of time) a summary is displayed with the number of correct answers, the number of incorrect answers, and the number of unanswered questions. 

I built this in React, using a Create React App starter code. 
I used Styled Components for the styling and for the tests I used Enzyme togehther with Jest. 

# Run the quiz 
To play the quiz 
- Download the main branch
- npm install
- npm start

To run the test files: 
- npm run test


## Upcoming features/fixes
- I would like to add all the life lines
- Write more test cases/get all the tests to work
- Add the questions to a database and fetch them with a useEffect instead
- Add some more styling