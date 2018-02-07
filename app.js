$(document).ready(function() {
  console.log("jQuery is linked");

//Put API function in a variable
  var assignRandomQuestion = function() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/random",

    success: function(json) {
      console.log(json);
      $("section").removeClass("hidden");
      $("section").html(json[0].question);
      $("table").addClass("dissapear");
    },
    error: function() {
      console.log("Error!");
    }
  }))};

//Assigns random question to each table box
$("td").on('click', function() {
  assignRandomQuestion();
  //$(this.clicked).addClass("dissapear"); --NOT WORKING
});

//Make the number dissapear after question is clicked
$("section").on('click', function() {
  $("table").removeClass("dissapear");
  $("section").addClass("hidden");
});

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
