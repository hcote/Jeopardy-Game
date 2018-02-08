$(document).ready(function() {
  console.log("jQuery is linked");

var userAnswer;
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

//FYI -- STILL IN The FUNCTION ABOVE
//After 10 second timer ends. Go back to the board after click on the question
  setTimeout(function(){
    console.log("timer done");
    $("table").removeClass("dissapear");
    $("section").addClass("hidden");
  }, 10000);
});


//If the submitted answer = json.answer, add value to player score
  $("form").on('submit', function(e) {
  e.preventDefault();
  userAnswer = $(".inputText").val();
  if (userAnswer === correctAnswer) {
  console.log(userAnswer + " is correct!");
  $("#playerOneScore").html(answerWorth);
} else {
   console.log(userAnswer + " is wrong! - " + answerWorth);
   $("#playerOneScore").html(-answerWorth);
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
