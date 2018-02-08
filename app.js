$(document).ready(function() {
  console.log("jQuery is linked");

// responsiveVoice.speak("Hello, WDI 43. Welcome to Jeopardy");

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

        responsiveVoice.speak(json[0].question.toString());
        correctAnswer = json[0].answer.toLowerCase();
        answerWorth = json[0].value;
      // } else {
      //   console.log("next question - this one is too hard");
      // };
    },

    error: function() {
      console.log("Error. JSON service is temporarily.");
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
    // $("#box11").html(''); the td clicked last will have html be empty
    if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {

    } else {
      responsiveVoice.speak("No answers submitted, the correct answer is " + correctAnswer.toString());
    };
  }, 1000);
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
  $('.inputText1').val('');
  $('.inputText2').val('');
  $(".submit").prop("disabled", "true");
  responsiveVoice.speak("Great job player one, you got the correct answer");
  // $("form").val(''); NEED TO DISABLE OTHER PLAYERS SUBMIT BUTTON AND CLEAR BOTH INPUT TEXT BOXES UPON CORRECT ASNWER SUBMISSION
} else {
   console.log(userOneAnswer + " is wrong! - " + answerWorth);
   $("#playerOneScore").html(-answerWorth);
   $('.inputText1').val('');
   $(".submit").prop("disabled", "true");
   if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {

   } else {
     responsiveVoice.speak("You are wrong, the answer is " + correctAnswer.toString());
   };
 }});

 $("#userTwoForm").on('submit', function() {
 userTwoAnswer = $(".inputText2").val().toLowerCase();
 if (userTwoAnswer === correctAnswer) {
 console.log(userTwoAnswer + " is correct!");
 $("#playerTwoScore").html(answerWorth);
 $('.inputText1').val('');
 $('.inputText2').val('');
 $(".submit").prop("disabled", "true");
 responsiveVoice.speak("Great job player two, you got the correct answer");
} else {
  console.log(userTwoAnswer + " is wrong! - " + answerWorth);
  $("#playerTwoScore").html(-answerWorth);
  $('.inputText2').val('');
  $(".submit").prop("disabled", "true");
  if (userOneAnswer === correctAnswer || userTwoAnswer === correctAnswer) {

  } else {
    responsiveVoice.speak("You are wrong, the answer is " + correctAnswer.toString());
  };
}});

//Remove box text after being clicked
$(".box").each(function(index){
  $(this).on('click', function(index) {
    $(this).html('');
  });
})

//End of document.ready
});




// Challenges
// Make the number dissapear after question is clicked
// Make only one word answers
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
