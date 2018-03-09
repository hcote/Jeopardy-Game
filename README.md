# Technologies Used:
	* API / AJAX (Jeopardy and Responsive Voice)
	* HTML, CSS, JavaScript, jQuery, Git/Github

# Approach
	* Wanted to focus more on JavaScript than HTML and CSS
	* Incorporate as much of unit 1 knowledge as possible, especially API's
	* Wanted to do a trivia game, and luckily Jeopardy had an API
	* Didn't plan everything out at the start - picked something to do then went on to whatever was my next idea. Overall goal was to replicate the actual game as close as possible

# Instructions
	1. Randomize the question categories
	2. Pick a grid box (in no particular order)
	3. Random question pops up - text boxes and submit buttons are enabled
	4. If you know the answer, submit it. No penalty for not guessing
	5. If you get it right, the question value will be added to your score
	6. If you get it wrong, the question value will be deducted from your score
	7. After your answer (right or wrong) is submitted, the form is re-deactivated and the next player chooses a question
	8. If you answer correctly before the other player, they're unable to submit their guess
	9. Keep randomizing the categories until a player gets 2,000 points
	10. The first player to 2,000 points wins the game


# Challenges
* Writing (trying to write) DRY code for situations where there are several different outcomes and each one returns a different action (player 1 submits wrong answer, submits right answer, doesn't submit any answer, and same for player 2)
* Enabling/disabling player submit buttons, and clear answer boxes based on different events - confusion between when to use .val(), .Attr() .html() or .prop(). After a million trial and error runs, .prop did it.
* Very tough to make the grid box clicked disappear after a contestant clicks it. Had to write a function, within a function, within another function (I think my first time doing that).
* How do I get the question values to compound after each question, rather than reset? Essentially had to put values (current score & value of question) in variables and run the parseInt() method rather than calling them straight with json.value
* How do I randomly get categories to populate the column headers? 5 different AJAX calls, each one spliced the data into an array, which then replaced the html() of the column header
* Then, how do I ensure the random questions in each column correspond with the column header, as well as value? Find a unique identifier (ID) of each category, put that in a new array, then include that unique random ID on the API call url to get the questions for that ID. Then get the index of each question, and apply that to the appropriate grid box (right question value (row) and right question category (column)).
* CSS (still now how I want it)
* Aside from .6, keeping everything organized was the biggest challenge. I commented a lot in my code, but each event triggers several others, and my code was repetitive, making it hard to figure out which function was running when. For example, when a player submits a guess, the following functions run: a timer ends, the table reappears, the question disappears, the question value clicked disappears, the submit button is disabled, the user textbox gets disabled, the player score is updated, if/else statements are run to decide what to do if the answer was right/wrong. And that's just one of several actions happening one after the next.


# Future Plans
	1. Include a countdown or animation dictating how much time is left
	2. Host it online (could not do through Github bc API link is http not https)
	3. Math.random to give daily double
	5. Animations for question popup & leave (couldn't figure out without breaking a bunch of stuff)
	6. Improved CSS
