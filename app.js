$(document).ready(function() {

console.log("jQuery is linked");

// Setting usernames
$("#changeName").on('click', function() {
var userOneName = prompt("Player one, please enter your username");
$("#playerOneName").html(userOneName);
// var userTwoName = prompt("Player two, please enter your username");
// $("#playerTwoName").html(userTwoName);
});

alert("Make sure to read the instructions before playing.");

var userOneAnswer;
var userTwoAnswer;
var correctAnswer;
var answerWorth;
<<<<<<< HEAD:public/script/app.js
var timerValue = 5000;
var timeAlottedForComp = (timerValue - 1);
=======
var timerValue = 10000;
var timeAlottedForComp = (timerValue - 500);
>>>>>>> 56bd069b361ad12eca9b82ee347f079a6ba761e5:app.js
var difficultyLevel;

var colOne;
var colTwo;
var colThree;
var colFour;
var colFive;

var randomCategories = [];
var categoryIds = [];
var numTimesRandomized = 1

<<<<<<< HEAD:public/script/app.js
// LEFT OFF HERE: need to make sure line 127 in this file is copied and pasted
// to every function column x; and need to find a way to fill in dummy
// multiple choice answers. started with the if else if math.random function
// below here
// var multipleChoiceMath = function() {
//   if (Math.random() >= .75) {
//     $('.multipleChoiceA').html(correctAnswer);
//     $('.multipleChoiceB').html("hey");
//     $('.multipleChoiceC').html("hey");
//     $('.multipleChoiceD').html("hey");
//   } else if (Math.random() >= .5) {
//     $('.multipleChoiceA').html("hey");
//     $('.multipleChoiceB').html(correctAnswer);
//     $('.multipleChoiceC').html("hey");
//     $('.multipleChoiceD').html("hey");
//   } else if (Math.random() >= .25) {
//     $('.multipleChoiceA').html("hey");
//     $('.multipleChoiceB').html("hey");
//     $('.multipleChoiceC').html(correctAnswer);
//     $('.multipleChoiceD').html("hey");
//   } else {
//     $('.multipleChoiceA').html("hey");
//     $('.multipleChoiceB').html("hey");
//     $('.multipleChoiceC').html("hey");
//     $('.multipleChoiceD').html(correctAnswer);
//   }
// }

=======
>>>>>>> 56bd069b361ad12eca9b82ee347f079a6ba761e5:app.js
//Setting difficulty
$("#difficultyLevel").on('click', function() {
  difficultyLevel = prompt("Enter a number between 1 and 10. 1 is the easiest, 10 is the hardest");
  console.log(difficultyLevel);
})

//Randomize category for each column after button is clicked
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://localhost:3000/api/questions/1",

  success: function(json) {
    colOne = json.clues;
    console.log(colOne);
    console.log(json.title);
    console.log(numTimesRandomized);
    $(".CategoryOne").html(json.title.toString());
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://localhost:3000/api/questions/2",

  success: function(json) {
    colTwo = json.clues;
    $(".CategoryTwo").html(json.title.toString());
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://localhost:3000/api/questions/3",

  success: function(json) {
    colThree = json.clues
    $(".CategoryThree").html(json.title.toString());
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://localhost:3000/api/questions/4",

  success: function(json) {
    colFour = json.clues;
    $(".CategoryFour").html(json.title.toString());
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://localhost:3000/api/questions/5",

  success: function(json) {
    colFive = json.clues;
    $(".CategoryFive").html(json.title.toString());
    console.log(categoryIds);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});

//Ensures the question returned is the correct category and value
function columnOne200Question() {
        $("section")
          .removeClass("hidden")
          .html(colOne[0].question)
        $("table").addClass("dissapear");
        $("article").removeClass("hidden");
        // responsiveVoice.speak(colOne[0].question.toString());
        correctAnswer = colOne[0].answer.toLowerCase();
        answerWorth = colOne[0].value;
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colOne[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }
function columnOne400Question() {
          $("section")
            .removeClass("hidden")
            .html(colOne[1].question)
          $("table").addClass("dissapear");
          $("article").removeClass("hidden");
          // responsiveVoice.speak(colOne[1].question.toString());
          correctAnswer = colOne[1].answer.toLowerCase();
          answerWorth = colOne[1].value;
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colOne[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colOne[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnOne600Question() {
              $("section")
                .removeClass("hidden")
                .html(colOne[2].question)
              $("table").addClass("dissapear");
              $("article").removeClass("hidden");
              // responsiveVoice.speak(colOne[2].question.toString());
              correctAnswer = colOne[2].answer.toLowerCase();
              answerWorth = colOne[2].value;
              if (Math.random() >= .75) {
                $('.multipleChoiceA').html(correctAnswer);
                $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colOne[1].answer.toLowerCase());
                $('.multipleChoiceD').html(colOne[4].answer.toLowerCase());
              } else if (Math.random() >= .5) {
                $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
                $('.multipleChoiceB').html(correctAnswer);
                $('.multipleChoiceC').html(colOne[1].answer.toLowerCase());
                $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
              } else if (Math.random() >= .25) {
                $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
                $('.multipleChoiceB').html(colOne[1].answer.toLowerCase());
                $('.multipleChoiceC').html(correctAnswer);
                $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
              } else {
                $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
                $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colOne[1].answer.toLowerCase());
                $('.multipleChoiceD').html(correctAnswer);
              }
          }
function columnOne800Question() {
            $("section")
              .removeClass("hidden")
              .html(colOne[3].question)
            $("table").addClass("dissapear");
            $("article").removeClass("hidden");
            // responsiveVoice.speak(colOne[3].question.toString());
            correctAnswer = colOne[3].answer.toLowerCase();
            answerWorth = colOne[3].value;
            if (Math.random() >= .75) {
              $('.multipleChoiceA').html(correctAnswer);
              $('.multipleChoiceB').html(colOne[1].answer.toLowerCase());
              $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
              $('.multipleChoiceD').html(colOne[4].answer.toLowerCase());
            } else if (Math.random() >= .5) {
              $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
              $('.multipleChoiceB').html(correctAnswer);
              $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
              $('.multipleChoiceD').html(colOne[1].answer.toLowerCase());
            } else if (Math.random() >= .25) {
              $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colOne[2].answer.toLowerCase());
              $('.multipleChoiceC').html(correctAnswer);
              $('.multipleChoiceD').html(colOne[5].answer.toLowerCase());
            } else {
              $('.multipleChoiceA').html(colOne[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colOne[1].answer.toLowerCase());
              $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
              $('.multipleChoiceD').html(correctAnswer);
            }
        }
function columnOne1000Question() {
        $("section")
          .removeClass("hidden")
          .html(colOne[4].question)
        $("table").addClass("dissapear");
        $("article").removeClass("hidden");
        // responsiveVoice.speak(colOne[4].question.toString());
        correctAnswer = colOne[4].answer.toLowerCase();
        answerWorth = colOne[4].value;
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colOne[1].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colOne[1].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colOne[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colOne[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colOne[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colOne[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colOne[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }

function columnTwo200Question() {
          $("section")
            .removeClass("hidden")
            .html(colTwo[0].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colTwo[0].question.toString());
          correctAnswer = colTwo[0].answer.toLowerCase();
          answerWorth = colTwo[0].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colTwo[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colTwo[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnTwo400Question() {
              $("section")
                .removeClass("hidden")
                .html(colTwo[1].question)
              $("table").addClass("dissapear");
              // responsiveVoice.speak(colTwo[1].question.toString());
              correctAnswer = colTwo[1].answer.toLowerCase();
              answerWorth = colTwo[1].value;
              $("article").removeClass("hidden");
              if (Math.random() >= .75) {
                $('.multipleChoiceA').html(correctAnswer);
                $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(colTwo[4].answer.toLowerCase());
              } else if (Math.random() >= .5) {
                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                $('.multipleChoiceB').html(correctAnswer);
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
              } else if (Math.random() >= .25) {
                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                $('.multipleChoiceB').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceC').html(correctAnswer);
                $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
              } else {
                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(correctAnswer);
              }
          }
function columnTwo600Question() {
                  $("section")
                    .removeClass("hidden")
                    .html(colTwo[2].question)
                  $("table").addClass("dissapear");
                  // responsiveVoice.speak(colTwo[2].question.toString());
                  correctAnswer = colTwo[2].answer.toLowerCase();
                  answerWorth = colTwo[2].value;
                  $("article").removeClass("hidden");
                  if (Math.random() >= .75) {
                    $('.multipleChoiceA').html(correctAnswer);
                    $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                    $('.multipleChoiceC').html(colTwo[0].answer.toLowerCase());
                    $('.multipleChoiceD').html(colTwo[4].answer.toLowerCase());
                  } else if (Math.random() >= .5) {
                    $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(correctAnswer);
                    $('.multipleChoiceC').html(colTwo[0].answer.toLowerCase());
                    $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
                  } else if (Math.random() >= .25) {
                    $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(colTwo[0].answer.toLowerCase());
                    $('.multipleChoiceC').html(correctAnswer);
                    $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
                  } else {
                    $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                    $('.multipleChoiceC').html(colTwo[0].answer.toLowerCase());
                    $('.multipleChoiceD').html(correctAnswer);
                  }
              }
function columnTwo800Question() {
                              $("section")
                                .removeClass("hidden")
                                .html(colTwo[3].question)
                              $("table").addClass("dissapear");
                              // responsiveVoice.speak(colTwo[3].question.toString());
                              correctAnswer = colTwo[3].answer.toLowerCase();
                              answerWorth = colTwo[3].value;
                              $("article").removeClass("hidden");
                              if (Math.random() >= .75) {
                                $('.multipleChoiceA').html(correctAnswer);
                                $('.multipleChoiceB').html(colTwo[1].answer.toLowerCase());
                                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                                $('.multipleChoiceD').html(colTwo[4].answer.toLowerCase());
                              } else if (Math.random() >= .5) {
                                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                                $('.multipleChoiceB').html(correctAnswer);
                                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                                $('.multipleChoiceD').html(colTwo[1].answer.toLowerCase());
                              } else if (Math.random() >= .25) {
                                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                                $('.multipleChoiceB').html(colTwo[2].answer.toLowerCase());
                                $('.multipleChoiceC').html(correctAnswer);
                                $('.multipleChoiceD').html(colTwo[1].answer.toLowerCase());
                              } else {
                                $('.multipleChoiceA').html(colTwo[4].answer.toLowerCase());
                                $('.multipleChoiceB').html(colTwo[1].answer.toLowerCase());
                                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                                $('.multipleChoiceD').html(correctAnswer);
                              }
                          }
function columnTwo1000Question() {
              $("section")
                .removeClass("hidden")
                .html(colTwo[4].question)
              $("table").addClass("dissapear");
              // responsiveVoice.speak(colTwo[4].question.toString());
              correctAnswer = colTwo[4].answer.toLowerCase();
              answerWorth = colTwo[4].value;
              $("article").removeClass("hidden");
              if (Math.random() >= .75) {
                $('.multipleChoiceA').html(correctAnswer);
                $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(colTwo[0].answer.toLowerCase());
              } else if (Math.random() >= .5) {
                $('.multipleChoiceA').html(colTwo[0].answer.toLowerCase());
                $('.multipleChoiceB').html(correctAnswer);
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
              } else if (Math.random() >= .25) {
                $('.multipleChoiceA').html(colTwo[0].answer.toLowerCase());
                $('.multipleChoiceB').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceC').html(correctAnswer);
                $('.multipleChoiceD').html(colTwo[3].answer.toLowerCase());
              } else {
                $('.multipleChoiceA').html(colTwo[0].answer.toLowerCase());
                $('.multipleChoiceB').html(colTwo[3].answer.toLowerCase());
                $('.multipleChoiceC').html(colTwo[2].answer.toLowerCase());
                $('.multipleChoiceD').html(correctAnswer);
              }
          }

function columnThree200Question() {
        $("section")
          .removeClass("hidden")
          .html(colThree[0].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colThree[0].question.toString());
        correctAnswer = colThree[0].answer.toLowerCase();
        answerWorth = colThree[0].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colThree[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }
function columnThree400Question() {
          $("section")
            .removeClass("hidden")
            .html(colThree[1].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colThree[1].question.toString());
          correctAnswer = colThree[1].answer.toLowerCase();
          answerWorth = colThree[1].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnThree600Question() {
          $("section")
            .removeClass("hidden")
            .html(colThree[2].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colThree[2].question.toString());
          correctAnswer = colThree[2].answer.toLowerCase();
          answerWorth = colThree[2].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnThree800Question() {
          $("section")
            .removeClass("hidden")
            .html(colThree[3].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colThree[3].question.toString());
          correctAnswer = colThree[3].answer.toLowerCase();
          answerWorth = colThree[3].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colThree[0].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colThree[0].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colThree[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colThree[0].answer.toLowerCase());
            $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnThree1000Question() {
        $("section")
          .removeClass("hidden")
          .html(colThree[4].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colThree[4].question.toString());
        correctAnswer = colThree[4].answer.toLowerCase();
        answerWorth = colThree[4].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colThree[1].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colThree[1].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colThree[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colThree[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colThree[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colThree[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colThree[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }

function columnFour200Question() {
                  $("section")
                    .removeClass("hidden")
                    .html(colFour[0].question)
                  $("table").addClass("dissapear");
                  // responsiveVoice.speak(colFour[0].question.toString());
                  correctAnswer = colFour[0].answer.toLowerCase();
                  answerWorth = colFour[0].value;
                  $("article").removeClass("hidden");
                  if (Math.random() >= .75) {
                    $('.multipleChoiceA').html(correctAnswer);
                    $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
                    $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
                    $('.multipleChoiceD').html(colFour[4].answer.toLowerCase());
                  } else if (Math.random() >= .5) {
                    $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(correctAnswer);
                    $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
                    $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
                  } else if (Math.random() >= .25) {
                    $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(colFour[2].answer.toLowerCase());
                    $('.multipleChoiceC').html(correctAnswer);
                    $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
                  } else {
                    $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
                    $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
                    $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
                    $('.multipleChoiceD').html(correctAnswer);
                  }
                  console.log(categoryIds);
              }
function columnFour400Question() {
        $("section")
          .removeClass("hidden")
          .html(colFour[1].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colFour[1].question.toString());
        correctAnswer = colFour[1].answer.toLowerCase();
        answerWorth = colFour[1].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }
function columnFour600Question() {
            $("section")
              .removeClass("hidden")
              .html(colFour[2].question)
            $("table").addClass("dissapear");
            // responsiveVoice.speak(colFour[2].question.toString());
            correctAnswer = colFour[2].answer.toLowerCase();
            answerWorth = colFour[2].value;
            $("article").removeClass("hidden");
            if (Math.random() >= .75) {
              $('.multipleChoiceA').html(correctAnswer);
              $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
              $('.multipleChoiceC').html(colFour[0].answer.toLowerCase());
              $('.multipleChoiceD').html(colFour[4].answer.toLowerCase());
            } else if (Math.random() >= .5) {
              $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
              $('.multipleChoiceB').html(correctAnswer);
              $('.multipleChoiceC').html(colFour[0].answer.toLowerCase());
              $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
            } else if (Math.random() >= .25) {
              $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colFour[0].answer.toLowerCase());
              $('.multipleChoiceC').html(correctAnswer);
              $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
            } else {
              $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
              $('.multipleChoiceC').html(colFour[0].answer.toLowerCase());
              $('.multipleChoiceD').html(correctAnswer);
            }
        }
function columnFour800Question() {
        $("section")
          .removeClass("hidden")
          .html(colFour[3].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colFour[3].question.toString());
        correctAnswer = colFour[3].answer.toLowerCase();
        answerWorth = colFour[3].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colFour[1].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[1].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colFour[1].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colFour[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[1].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }
function columnFour1000Question() {
        $("section")
          .removeClass("hidden")
          .html(colFour[4].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colFour[4].question.toString());
        correctAnswer = colFour[4].answer.toLowerCase();
        answerWorth = colFour[4].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[1].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colFour[1].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colFour[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colFour[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colFour[1].answer.toLowerCase());
          $('.multipleChoiceB').html(colFour[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFour[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }

function columnFive200Question() {
        $("section")
          .removeClass("hidden")
          .html(colFive[0].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colFive[0].question.toString());
        correctAnswer = colFive[0].answer.toLowerCase();
        answerWorth = colFive[0].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFive[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
          $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFive[2].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
    }
function columnFive400Question() {
          $("section")
            .removeClass("hidden")
            .html(colFive[1].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colFive[1].question.toString());
          correctAnswer = colFive[1].answer.toLowerCase();
          answerWorth = colFive[1].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colFive[4].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
            $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }
function columnFive600Question() {
        $("section")
        .removeClass("hidden")
        .html(colFive[2].question)
        $("table").addClass("dissapear");
        // responsiveVoice.speak(colFive[2].question.toString());
        correctAnswer = colFive[2].answer.toLowerCase();
        answerWorth = colFive[2].value;
        $("article").removeClass("hidden");
        if (Math.random() >= .75) {
          $('.multipleChoiceA').html(correctAnswer);
          $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFive[1].answer.toLowerCase());
          $('.multipleChoiceD').html(colFive[4].answer.toLowerCase());
        } else if (Math.random() >= .5) {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(correctAnswer);
          $('.multipleChoiceC').html(colFive[1].answer.toLowerCase());
          $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
        } else if (Math.random() >= .25) {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFive[1].answer.toLowerCase());
          $('.multipleChoiceC').html(correctAnswer);
          $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
        } else {
          $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
          $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
          $('.multipleChoiceC').html(colFive[1].answer.toLowerCase());
          $('.multipleChoiceD').html(correctAnswer);
        }
      }
function columnFive800Question() {
            $("section")
              .removeClass("hidden")
              .html(colFive[3].question)
            $("table").addClass("dissapear");
            // responsiveVoice.speak(colFive[3].question.toString());
            correctAnswer = colFive[3].answer.toLowerCase();
            answerWorth = colFive[3].value;
            $("article").removeClass("hidden");
            if (Math.random() >= .75) {
              $('.multipleChoiceA').html(correctAnswer);
              $('.multipleChoiceB').html(colFive[0].answer.toLowerCase());
              $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
              $('.multipleChoiceD').html(colFive[4].answer.toLowerCase());
            } else if (Math.random() >= .5) {
              $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
              $('.multipleChoiceB').html(correctAnswer);
              $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
              $('.multipleChoiceD').html(colFive[0].answer.toLowerCase());
            } else if (Math.random() >= .25) {
              $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colFive[2].answer.toLowerCase());
              $('.multipleChoiceC').html(correctAnswer);
              $('.multipleChoiceD').html(colFive[0].answer.toLowerCase());
            } else {
              $('.multipleChoiceA').html(colFive[4].answer.toLowerCase());
              $('.multipleChoiceB').html(colFive[0].answer.toLowerCase());
              $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
              $('.multipleChoiceD').html(correctAnswer);
            }
        }
function columnFive1000Question() {
          $("section")
            .removeClass("hidden")
            .html(colFive[4].question)
          $("table").addClass("dissapear");
          // responsiveVoice.speak(colFive[4].question.toString());
          correctAnswer = colFive[4].answer.toLowerCase();
          answerWorth = colFive[4].value;
          $("article").removeClass("hidden");
          if (Math.random() >= .75) {
            $('.multipleChoiceA').html(correctAnswer);
            $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colFive[1].answer.toLowerCase());
          } else if (Math.random() >= .5) {
            $('.multipleChoiceA').html(colFive[1].answer.toLowerCase());
            $('.multipleChoiceB').html(correctAnswer);
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
          } else if (Math.random() >= .25) {
            $('.multipleChoiceA').html(colFive[1].answer.toLowerCase());
            $('.multipleChoiceB').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceC').html(correctAnswer);
            $('.multipleChoiceD').html(colFive[3].answer.toLowerCase());
          } else {
            $('.multipleChoiceA').html(colFive[1].answer.toLowerCase());
            $('.multipleChoiceB').html(colFive[3].answer.toLowerCase());
            $('.multipleChoiceC').html(colFive[2].answer.toLowerCase());
            $('.multipleChoiceD').html(correctAnswer);
          }
      }

//Enable/disable players to enter and submit answers
function enablePlayerSubmits() {
  $(".inputText1").removeAttr("disabled");
  $(".inputText2").removeAttr("disabled");
  $(".submit").removeAttr("disabled");
  $(".submit").addClass("submitGreen");
};
function enablePlayerOneSubmits() {
  $(".inputText1").removeAttr("disabled");
  $("#plsyerSubmit").removeAttr("disabled");
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
  $("article").addClass("hidden");
  checkWinner();
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

function computerWins() {
  if (Math.random() * 100 < (difficultyLevel * 10)) {
    setTimeout(function() {
      backToBoard();
      disablePlayerSubmits();
      disablePlayersTextbox();
      resetBothUsersTextbox();
      console.log("Computer wins");
      var currentScore = parseInt($("#playerTwoScore").html());
      $("#playerTwoScore").html(currentScore + answerWorth);
    }, timeAlottedForComp);
    } else {
      return
    }
  }

//Assigns question to each grid box
//Enables player submit button & text field
//Includes timer logic
$(".columnone200").on('click', function() {
  columnOne200Question();
  enablePlayerOneSubmits();
  setTimer();
  computerWins();
});
$(".columnone400").on('click', function() {
  columnOne400Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnone600").on('click', function() {
  columnOne600Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnone800").on('click', function() {
  columnOne800Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnone1000").on('click', function() {
  columnOne1000Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});

$(".columntwo200").on('click', function() {
  columnTwo200Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columntwo400").on('click', function() {
  columnTwo400Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columntwo600").on('click', function() {
  columnTwo600Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columntwo800").on('click', function() {
  columnTwo800Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columntwo1000").on('click', function() {
  columnTwo1000Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});

$(".columnthree200").on('click', function() {
  columnThree200Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnthree400").on('click', function() {
  columnThree400Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnthree600").on('click', function() {
  columnThree600Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnthree800").on('click', function() {
  columnThree800Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnthree1000").on('click', function() {
  columnThree1000Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});

$(".columnfour200").on('click', function() {
  columnFour200Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfour400").on('click', function() {
  columnFour400Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfour600").on('click', function() {
  columnFour600Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfour800").on('click', function() {
  columnFour800Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfour1000").on('click', function() {
  columnFour1000Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});

$(".columnfive200").on('click', function() {
  columnFive200Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfive400").on('click', function() {
  columnFive400Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfive600").on('click', function() {
  columnFive600Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfive800").on('click', function() {
  columnFive800Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});
$(".columnfive1000").on('click', function() {
  columnFive1000Question();
  enablePlayerOneSubmits();
  setTimer();
    computerWins();
});

//When user submits quess, go back to the board
$("form").on('submit', function(e) {
  e.preventDefault();
  backToBoard();
  disablePlayersTextbox();
});

//Logic for winning
function checkWinner() {
    if (parseInt($("#playerOneScore").html()) >= 1000) {
    alert("Congrats, you win! Refresh the page to play again");
    console.log("yo");
  } else if (parseInt($("#playerTwoScore").html()) >= 1000) {
    alert("You lose. Refresh the page to play again.");
    console.log("comp wins");
  } else {
    console.log("Please choose another question box.");;
  }
}


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
  responsiveVoice.speak("Correct");
  } else {
  $("#playerOneScore").html(currentScore + newScore);
   resetUserOneTextbox();
   disablePlayerSubmits();
  }});

$("aside").on('click', function() {
  console.log($(this).html());
  var currentScore = parseInt($("#playerOneScore").html());
  var newScore = parseInt(-answerWorth);
  if ($(this).html() === correctAnswer) {
    $("#playerOneScore").html(currentScore + answerWorth);
    resetBothUsersTextbox();
    disablePlayerSubmits();
    backToBoard();
    responsiveVoice.speak("Correct");
    console.log("correct");
    } else {
    $("#playerOneScore").html(currentScore + newScore);
    console.log("incorrect");
     resetUserOneTextbox();
     disablePlayerSubmits();
     backToBoard();
     responsiveVoice.speak("Incorrect");
    }
});

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
 responsiveVoice.speak("Correct");
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
//End of document.ready
});
