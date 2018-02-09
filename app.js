$(document).ready(function() {
  console.log("jQuery is linked");

// responsiveVoice.speak("Hello, WDI 43. Welcome to Jeopardy");

var userOneAnswer;
var userTwoAnswer;
var correctAnswer;
var answerWorth;
var timerValue = 10000;

//Put API function in a variable
function assignRandomQuestion() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/random",

    success: function(json) {
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json[0].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak(json[0].question.toString());
        correctAnswer = json[0].answer.toLowerCase();
        answerWorth = json[0].value;
    },
    error: function() {
      console.log("Error. JSON service is temporarily.");
    }
  }))};

//Enable players to enter and submit answers
function enablePlayerSubmits() {
  $(".inputText1").removeAttr("disabled");
  $(".inputText2").removeAttr("disabled");
  $(".submit").removeAttr("disabled");
};

function disablePlayerSubmits() {
  $(".submit").prop("disabled", "true");
};

//Hides question, sets board back to visible
function backToBoard() {
  $("table").removeClass("dissapear");
  $("section").addClass("hidden");
};

function setTimer() {
  setTimeout(function(){
  backToBoard();
  $(".submit").prop("disabled", "true");
  $(".inputText1").prop("disabled", "true");
  $(".inputText2").prop("disabled", "true");
  $('.inputText1').val('');
  $('.inputText2').val('');
  if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {
      return;
  } else {
    responsiveVoice.speak("No answers submitted, the correct answer is " + correctAnswer.toString());
  };
}, timerValue)};

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

//Assigns random question to each table box
//Enables player submit button & text field
//Timer logic (after 10 seconds: hide question, show board, disable users submit buttons, reset textbox)
//If user puts correct answer, end function
//If neither user submits answer, voice responds with correct answer
$("td").on('click', function() {
  assignRandomQuestion();
  enablePlayerSubmits();
  setTimer();
});

//When user hits Submit, go back to the board
$("form").on('submit', function(e) {
  e.preventDefault();
  backToBoard();
});

//When user one hits Submit:
//Turn submission to lowercase, compare it to correct answer
//If user one answer is correct, add question value to user one Score
//Voice responds "you are correct, etc."
//Reset both players text boxes
//Disable forms until new question is clicked
//If user one answer is wrong, doc the question value from user one Score
//Reset user ones submit button and reset user one textbox
//Voice responds "you are wrong, etc."
$("#userOneForm").on('submit', function() {
  userOneAnswer = $(".inputText1").val().toLowerCase();
  if (userOneAnswer === correctAnswer) {
  $("#playerOneScore").html(answerWorth);
  resetBothUsersTextbox();
  disablePlayerSubmits();
  responsiveVoice.speak("Great job player one, you got the correct answer");
  } else {
   $("#playerOneScore").html(-answerWorth);
   resetUserOneTextbox();
   disablePlayerSubmits();
   if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {

   } else {
     responsiveVoice.speak("You are wrong, the answer is " + correctAnswer.toString());
   };
 }});

 $("#userTwoForm").on('submit', function() {
 userTwoAnswer = $(".inputText2").val().toLowerCase();
 if (userTwoAnswer === correctAnswer) {
 $("#playerTwoScore").html(answerWorth);
 resetUserOneTextbox();
 resetUserTwoTextbox();
 disablePlayerSubmits();
 responsiveVoice.speak("Great job player two, you got the correct answer");
} else {
  $("#playerTwoScore").html(-answerWorth);
  resetUserTwoTextbox();
  disablePlayerSubmits();;
  if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {

  } else {
    responsiveVoice.speak("You are wrong, the answer is " + correctAnswer.toString());
  };
}});

//Remove box text after being clicked
   $(".box").each(function(index){
   $(this).on('click', function(index) {
   $(this).html('');
  })
});

//End of document.ready
});


// Challenges
// Make the number dissapear after question is clicked J
// Make only one word answers (can't figure out - Kay said regEx)
// Make it audible for each question J
// Make a point system J
// Make it able for two players to play J
// Disable submit boxes after after 10 seconds J
// Reload back to board after 10 seconds J
// Make a login (players choose username?)
// Capture user answer input J
// Store user score from one round to the next
// Animations for question popup & leave
// Add player station-like styling to the player boxes
// Add frame around board to look better
// Disable timer voice if an answer was submitted
