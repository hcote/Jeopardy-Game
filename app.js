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
  //    if ($('correctAnswer').not(':contains(" ")')) {
  // console.log("one word answer");
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json[0].question);
        $("table").addClass("dissapear");

        correctAnswer = json[0].answer.toLowerCase();
        answerWorth = json[0].value;
      // } else {
      //   console.log("next question - this one is too hard");
      // };
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
  $(".submit").removeAttr("disabled");
//FYI -- STILL IN The FUNCTION ABOVE
//After 10 second timer ends. Go back to the board after click on the question
  setTimeout(function(){
    console.log("timer done");
    $("table").removeClass("dissapear");
    $("section").addClass("hidden");
    $(".submit").prop("disabled", "true");
    $(".inputText1").prop("disabled", "true");
    $(".inputText2").prop("disabled", "true");
    $('.inputText1').val('');
    $('.inputText2').val('');
  }, 10000);
});

  window.localStorage.setItem("#playerOneScore", "answerWorth");


//If the submitted answer = json.answer, add value to player score
  $("form").on('submit', function(e) {
  e.preventDefault();
  $("table").removeClass("dissapear");
  $("section").addClass("hidden");
});

  $("#userOneForm").on('submit', function() {
  userOneAnswer = $(".inputText1").val().toLowerCase();
  if (userOneAnswer === correctAnswer) {
  console.log(userOneAnswer + " is correct!");
  $("#playerOneScore").html(answerWorth);
  alert("User One Wins!");
  $('.inputText1').val('');
  $('.inputText2').val('');
  $(".submit").prop("disabled", "true");
  // $("form").val(''); NEED TO DISABLE OTHER PLAYERS SUBMIT BUTTON AND CLEAR BOTH INPUT TEXT BOXES UPON CORRECT ASNWER SUBMISSION
} else {
   console.log(userOneAnswer + " is wrong! - " + answerWorth);
   $("#playerOneScore").html(-answerWorth);
   $('.inputText1').val('');
   $(".submit").prop("disabled", "true");
 }});

 $("#userTwoForm").on('submit', function() {
 userTwoAnswer = $(".inputText2").val().toLowerCase();
 if (userTwoAnswer === correctAnswer) {
 console.log(userTwoAnswer + " is correct!");
 $("#playerTwoScore").html(answerWorth);
 alert("User Two Wins!");
 $('.inputText1').val('');
 $('.inputText2').val('');
 $(".submit").prop("disabled", "true");
} else {
  console.log(userTwoAnswer + " is wrong! - " + answerWorth);
  $("#playerTwoScore").html(-answerWorth);
  $('.inputText2').val('');
  $(".submit").prop("disabled", "true");
}});



//End of document.ready
});




//Challenges
//Make the number dissapear after question is clicked
// Make it audible for each question
// Make a point system J
// Make it able for two players to play J
// Disable submit boxes after after 10 seconds
// Reload back to board after 10 seconds J
// Make a login (players choose username?)
// Capture user answer input J
// Store user score from one round to the next
