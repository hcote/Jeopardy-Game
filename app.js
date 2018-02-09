$(document).ready(function() {

console.log("jQuery is linked");

// Setting usernames
// var userOneName = prompt("Player one, please enter your username");
// $("#playerOneName").html(userOneName);
// var userTwoName = prompt("Player two, please enter your username");
// $("#playerTwoName").html(userTwoName);
// responsiveVoice.speak("Hello" + userOneName + " and " + userTwoName + ". Welcome to Jeopardy");

var userOneAnswer;
var userTwoAnswer;
var correctAnswer;
var answerWorth;
var timerValue = 10000;

var randomCategories = [];

//Randomize Category For Each Column
$("button").on('click', function getCategory() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.push(json[0].category.title);
    console.log(randomCategories);
    $(".CategoryOne").html(randomCategories[0]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("button").on('click', function getCategory() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.push(json[0].category.title);
    console.log(randomCategories);
    $(".CategoryTwo").html(randomCategories[1]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("button").on('click', function getCategory() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.push(json[0].category.title);
    console.log(randomCategories);
    $(".CategoryThree").html(randomCategories[2]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("button").on('click', function getCategory() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.push(json[0].category.title);
    console.log(randomCategories);
    $(".CategoryFour").html(randomCategories[3]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("button").on('click', function getCategory() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.push(json[0].category.title);
    console.log(randomCategories);
    $(".CategoryFive").html(randomCategories[4]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});

//If clicked .box.html($100) == true {retrieve json.value = 100}, etc.
//Could go crazy and do a random generator button to generate the categories, then returned json question will only choose a question from the category column that was clicked
function assignRandomQuestion() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/random",

    success: function(json) {
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json[0].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak("Category: " + json[0].category.title.toString());
        responsiveVoice.speak(json[0].question.toString());
        correctAnswer = json[0].answer.toLowerCase();
        answerWorth = json[0].value;
    },
    error: function() {
      console.log("Error. JSON service is temporarily.");
    }
  }))};

//Enable/disable players to enter and submit answers
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
// "|| $(".submit").data('clicked') != false" would not work
function setTimer() {
  setTimeout(function(){
  backToBoard();
  disablePlayerSubmits();
  disablePlayersTextbox();
  resetBothUsersTextbox();
  // if ($(".submit").clicked != false) {
  //     return;
  // } else {
  //   responsiveVoice.speak("No answers submitted, the correct answer is " + correctAnswer.toString());
  // };
}, timerValue)};

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
  disablePlayersTextbox();
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
//Exact same code logic as above, just for user two
$("#userTwoForm").on('submit', function() {
 userTwoAnswer = $(".inputText2").val().toLowerCase();
 if (userTwoAnswer === correctAnswer) {
 $("#playerTwoScore").html(answerWorth);
 resetBothUsersTextbox();
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

//Remove $dollar value on game board after the box is clicked
function removeUsedBox(){
   $(".box").each(function(index){
   $(this).on('click', function(index) {
   $(this).html('');
   $(this).addClass('answeredBox');
  })
})};
removeUsedBox();

//End of document.ready
});

// To Do //
// Make the number dissapear after question is clicked J
// Make only one word answers (can't figure out - Kay said regEx)
// Make it audible for each question J
// Make a point system J
// Make it able for two players to play J
// Disable submit boxes after after 10 seconds J
// Reload back to board after 10 seconds J
// Make a login (players choose username) J
// Capture user answer input J
// Store user score from one round to the next (local storage?)
// Animations for question popup & leave (couldn't figure out without breaking a bunch of stuff)
// Add styling to the player boxes and board to look better; add header to show game
// Disable timer voice if an answer was submitted
//Update readme.md file !!!
//Winning logic
//Alert if try to squeeze the window too small
//presentation: tell everyone why uou picked what you picked; what you learned (readme.md); challenges were css
//Feedback - make the voice less frequent
//Math.random to choose if the number is above .9 it gives daily double
//Loading bar above contestant textbox to show how much time remaining
