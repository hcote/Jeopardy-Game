$(document).ready(function() {
  console.log("jQuery is linked");

var userOneAnswer;
var userTwoAnswer;
var correctAnswer;;
var answerWorth

//Put API function in a variable
  var assignRandomQuestion = function() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/random",

    success: function(json) {
      console.log(json);
      $("section")
        .removeClass("hidden")
        .html(json[0].question);
      $("table").addClass("dissapear");

      correctAnswer = json[0].answer;
      answerWorth = json[0].value;
    },

    error: function() {
      console.log("Error. Could not receive json data.");
    }
  }))};

//Assigns random question to each table box
$("td").on('click', function() {
  assignRandomQuestion();
  $(".inputText1").removeAttr("disabled");
  $(".inputText2").removeAttr("disabled");
//FYI -- STILL IN The FUNCTION ABOVE
//Reference: https://www.w3schools.com/jsref/met_win_settimeout.asp
//After 10 second timer ends. Go back to the board after click on the question
  setTimeout(function(){
    console.log("timer done");
    $("table").removeClass("dissapear");
    $("section").addClass("hidden");
    //$(".inputText").Attr("disabled"); LEFT OFF HERE
  }, 20000);
});


//If the submitted answer = json.answer, add value to player score
  $("form").on('submit', function(e) {
  e.preventDefault();
  $("table").removeClass("dissapear");
  $("section").addClass("hidden");
});

  $("#userOneForm").on('submit', function() {
  userOneAnswer = $(".inputText1").val();
  if (userOneAnswer === correctAnswer) {
  console.log(userOneAnswer + " is correct!");
  $("#playerOneScore").html(answerWorth);
  alert("User One Wins!");
  $('.inputText1').val('');
  $('.inputText2').val('');
  // $("form").val(''); NEED TO DISABLE OTHER PLAYERS SUBMIT BUTTON AND CLEAR BOTH INPUT TEXT BOXES UPON CORRECT ASNWER SUBMISSION
} else {
   console.log(userOneAnswer + " is wrong! - " + answerWorth);
   $("#playerOneScore").html(-answerWorth);
   $('.inputText1').val('');
 }});

 $("#userTwoForm").on('submit', function() {
 userTwoAnswer = $(".inputText2").val();
 if (userTwoAnswer === correctAnswer) {
 console.log(userTwoAnswer + " is correct!");
 $("#playerTwoScore").html(answerWorth);
 alert("User Two Wins!");
 $('.inputText1').val('');
 $('.inputText2').val('');
} else {
  console.log(userTwoAnswer + " is wrong! - " + answerWorth);
  $("#playerTwoScore").html(-answerWorth);
  $('.inputText2').val('');
}});



//End of document.ready
});






//Challenges
//Make the number dissapear after question is clicked
// Make it audible for each question
// Make a point system
// Make it able for two players to play
// Disable submit boxes after after 15 seconds
// Reload back to board after 10 seconds (read question for 10 seconds, have additional 5 seconds to submit answer)
// Make a login (players choose username?)
// Capture user answer input
// Store user score from one round to the next
