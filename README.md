Technologies Used:
	API / AJAX (Jeopardy and Responsive Voice)
	HTML, CSS, JavaScript, jQuery, Git/Github

Approach
	-Focus more on JavaScript than HTML and CSS
	-Incorporate API's
	-Wanted to do a trivia game, and luckily Jeopardy had an API
	-Goal was to replicate the actual game as close as possible, but make it easy to play (hence the multiple choice)

Instructions
1. Set your name (if you choose)
2. Click the button below to randomize the categories
3. Click any box you choose (categories are at the top)
4. You are competing against a computer. Set it's difficulty level below.
5. Once the question shows up, you have ten seconds to answer the question
6. Four possible answers will appear, click the one you think is correct
7. If you are correct, that question's value is added to your current score
8. If you are wrong, that question's value is deducted from your current score
9. You do not have to answer a question
10. The first contestant to 2,000 points wins!



Challenges
	1. Writing DRY code for situations where there are several different outcomes and each one returns a different action (player 1 submits wrong answer, submits right answer, doesn't submit any answer, and same for player 2)
	2. Enabling/disabling player submit buttons, and clear answer boxes based on different events - confusion between when to use .val(), .Attr() .html() or .prop(). After a million trial and error runs, .prop did it.
	3. To make the grid box clicked disappear after a contestant clicks it. Had to write a function, within a function, within another function (I think my first time doing that).
	4. How do I get the question values to compound after each question, rather than reset? Essentially had to put values (current score & value of question) in variables and run the parseInt() method rather than calling them straight with json.value
	5. How do I randomly get categories to populate the column headers? 5 different AJAX calls, each one spliced the data into an array, which then replaced the html() of the column header
	6. Then, how do I ensure the random questions in each column correspond with the column header, as well as value? Find a unique identifier (ID) of each category, put that in a new array, then include that unique random ID on the API call url to get the questions for that ID. Then get the index of each question, and apply that to the appropriate grid box (right question value (row) and right question category (column)).


In the pipeline
 1. Stop the setTimer function from running if the submit button is clicked
 2. Allow for players to see the answers if they don't get it right
 3. Make sure the boxes already clicked on are unable to be clicked again until categories are randomized
 4. A timer animation showing the customer how much time is left
