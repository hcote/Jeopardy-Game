 $(document).ready(function() {
   console.log("jQuery is linked");

     // Setting usernames
     var userOneName = prompt("Player one, please enter your username");
     $("#playerOneName").html(userOneName);
     var userTwoName = prompt("Player two, please enter your username");
     $("#playerTwoName").html(userTwoName);
     // responsiveVoice.speak("Hello" + userOneName + " and " + userTwoName + ". Welcome to Jeopardy");

     var userOneAnswer, userTwoAnswer, correctAnswer, answerWorth;
     var timerValue = 10000;
     // var valuePattern = new RegExp('[0-9] ');

     var categoryData = {};
     var categoryElements = $('.category');
     var $cat1 = $('.cat-1');
     var $cat2 = $('.cat-2');
     var $cat3 = $('.cat-3');
     var $cat4 = $('.cat-4');
     var $cat5 = $('.cat-5');
     var $catCols = [$cat1, $cat2, $cat3, $cat4, $cat5];

     $("button").on('click', function() {
         // 1. Get 5 random categories
       $.ajax({
         method: "GET",
         url: "http://www.jservice.io/api/random",
         data: {"count": 5}, // jservice provides a count option to return 5 results at once
           success: function(json) {
             console.log("Random: ", json); // Returns 5 different categories
               for (var i=0; i < json.length; i++) {
                   var category = json[i].category;
                   categoryElements[i].innerHTML = category.title;
                   categoryElements[i].id = category.id;
                   $catCols[i].each(function(idx) { this.id = category.id; });
                   categoryData[category.id] = [];
                   getClues(category.id);
               }
           },
           error: function() {
             console.log("Category not assigned");
           }
         })
       });

     function getClues(categoryId) {
         // 2. Get 5 questions for each category using the api/clues endpoint
         // Checkout the api documentation for how to use this endpoint
         console.log("Getting clues for: ", categoryId);
         $.ajax({
             method: "GET",
             url: "http://www.jservice.io/api/clues",
             data: {
                 category: categoryId,
                 offset: 1       // Setting to between 1-25 can limit results
             },
             success: populateCategory,
             error: getErrors
           })
         }

function populateCategory(clues) {
         // 3. Store data and add to game board
         console.log("Populate: ", clues);
         var categoryId = clues[0].category_id;
         for (var i=0; i < clues.length; i++) {
             categoryData[categoryId] = clues;  // Update categoryData with clues for each category
         }
         console.log(categoryData);
       }

     function getErrors(err) {
         console.log(err);
     }

     $('.box').on('click', function(e) {
         $.ajax({
             method: 'GET',
             url: "http://www.jservice.io/api/random",
             success: showClue,
             error: getErrors
         })
     });

     function showClue(response) {
         console.log("Show clue: ", response);
      $("section").removeClass("hidden").html(response[0].question);
         $("table").addClass("dissapear");
         // responsiveVoice.speak(response[0].question.toString());
         correctAnswer = response[0].answer.toLowerCase();
         answerWorth = response[0].value;
         enablePlayerSubmits();
         setTimer();
     }
// Enable/disable players to enter and submit answers
     function enablePlayerSubmits() {
         $(".inputText1").removeAttr("disabled");
         $(".inputText2").removeAttr("disabled");
         $(".submit").removeAttr("disabled");
         $(".submit").addClass("submitGreen");
     };
     function disablePlayerSubmits() {
         $(".submit").prop("disabled", "true");
     };
     function disablePlayersTextbox() {
         $(".inputText1").prop("disabled", "true");
         $(".inputText2").prop("disabled", "true");
     }
//Hides question, sets board back to visible
     function backToBoard() {
        console.log("back to board");
         $("table").removeClass("dissapear");
         $("section").addClass("hidden");
         $(".submit").removeClass("submitGreen");
     };

     //Clear any text in users textbox
     function resetUserOneTextbox() {
         $('.inputText1').val('');
     };
     function resetUserTwoTextbox() {
         $('.inputText2').val('');
     };
     function resetBothUsersTextbox() {
         $('.inputText1').val('');
         $('.inputText2').val('');
     };

     //10 seconds to answer question before time expires
     function setTimer() {
         setTimeout(function(){
             backToBoard();
             disablePlayerSubmits();
             disablePlayersTextbox();
             resetBothUsersTextbox();
             console.log("Time up. Correct answer: " + correctAnswer);
         }, timerValue)};

     //When user submits quess, go back to the board
     $("form").on('submit', function(e) {
         e.preventDefault();
         backToBoard();
         disablePlayersTextbox();
     });

     //Logic for winning (not functional)
     function winningLogic() {
         if (parseInt("#playerOneScore") >= 1000) {
             alert("Game over, " + userOneName + " wins!");
         } else if (parseInt("#playerTwoScore") >= parseInt("100")) {
             alert("Game over, " + userTwoName + " wins!");
         }
     };

     //When user one hits Submit:
     //Turn submission to lowercase, compare it to correct answer
     //If user one answer is correct, add question value to user one Score
     //Voice responds "correct"
     //Reset both players text boxes
     //Disable forms until new question is clicked
     //If user one answer is wrong, doc the question value from user one Score
     $("#userOneForm").on('submit', function() {
         userOneAnswer = $(".inputText1").val().toLowerCase();
         var currentScore = parseInt($("#playerOneScore").html());
         var newScore = parseInt(-answerWorth);
         if (userOneAnswer === correctAnswer) {
             $("#playerOneScore").html(currentScore + answerWorth);
             resetBothUsersTextbox();
             disablePlayerSubmits();
             winningLogic();
             // responsiveVoice.speak("Correct");
         } else {
             $("#playerOneScore").html(currentScore + newScore);
             resetUserOneTextbox();
             disablePlayerSubmits();
         }});
     //Exact same code logic as above, just for user two
     $("#userTwoForm").on('submit', function() {
         userTwoAnswer = $(".inputText2").val().toLowerCase();
         var currentScore = parseInt($("#playerTwoScore").html());
         var newScore = parseInt(-answerWorth);
         if (userTwoAnswer === correctAnswer) {
             $("#playerTwoScore").html(currentScore + answerWorth);
             resetBothUsersTextbox();
             disablePlayerSubmits();
             winningLogic();
             // responsiveVoice.speak("Correct");
         } else {
             $("#playerTwoScore").html(currentScore + newScore);
             resetUserTwoTextbox();
             disablePlayerSubmits();;
         }});

     //Remove $dollar value on game board after the box is clicked
     function removeUsedBox(){
         $(".box").each(function(index){
             $(this).on('click', function(index) {
                 $(this).html('');
                 $(this).addClass('answeredBox');
             })
         })};

     removeUsedBox();

   });
