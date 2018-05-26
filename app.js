$(document).ready(function() {

console.log("jQuery is linked");

// Setting usernames
$("#changeName").on('click', function() {
var userOneName = prompt("Player one, please enter your username");
$("#playerOneName").html(userOneName);
// var userTwoName = prompt("Player two, please enter your username");
// $("#playerTwoName").html(userTwoName);
});

var hint = alert("Make sure to read the instructions before playing.")

var userOneAnswer;
var userTwoAnswer;
var correctAnswer;
var answerWorth;
var timerValue = 10000;
var timeAlottedForComp = (timerValue - 1);
var difficultyLevel;

var randomCategories = [];
var categoryIds = [];

//Setting difficulty
$("#difficultyLevel").on('click', function() {
  difficultyLevel = prompt("Enter a number between 1 and 10. 1 is the easiest, 10 is the hardest")
  console.log(difficultyLevel);
})


//Randomize category for each column after button is clicked
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.splice(0, 0, json[0].category.title);
    categoryIds.splice(0, 0, json[0].category.id);
    $(".CategoryOne").html(randomCategories[0]);
    var catIdOne = categoryIds[0];
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.splice(1, 0, json[0].category.title);
    categoryIds.splice(1, 0, json[0].category.id);
    $(".CategoryTwo").html(randomCategories[1]);
    var catIdTwo = categoryIds[1];
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.splice(2, 0, json[0].category.title);
    categoryIds.splice(2, 0, json[0].category.id);
    $(".CategoryThree").html(randomCategories[2]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.splice(3, 0, json[0].category.title);
    categoryIds.splice(3, 0, json[0].category.id);
    $(".CategoryFour").html(randomCategories[3]);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});
$("#randomizeCats").on('click', function() {($.ajax({
  method: "GET",
  url: "http://www.jservice.io/api/random",

  success: function(json) {
    randomCategories.splice(4, 0, json[0].category.title);
    categoryIds.splice(4, 0, json[0].category.id);
    $(".CategoryFive").html(randomCategories[4]);
    console.log(categoryIds);
  },
  error: function() {
    console.log("Category not assigned");
  }
}))});

//Ensures the question returned is the correct category and value
function columnOne200Question() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/category?id="+categoryIds[0],

    success: function(json) {
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json.clues[0].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak(json.clues[0].question.toString());
        correctAnswer = json.clues[0].answer.toLowerCase();
        answerWorth = json.clues[0].value;
        console.log(categoryIds);
    },
    error: function() {
      console.log("Error. JSON service is temporarily unavailable.");
    }
  }))};
function columnOne400Question() {($.ajax({
      method: "GET",
      url: "http://www.jservice.io/api/category?id="+categoryIds[0],

      success: function(json) {
          console.log(json);
          $("section")
            .removeClass("hidden")
            .html(json.clues[1].question)
          $("table").addClass("dissapear");
          responsiveVoice.speak(json.clues[1].question.toString());
          correctAnswer = json.clues[1].answer.toLowerCase();
          answerWorth = json.clues[1].value;
          console.log(categoryIds);
      },
      error: function() {
        console.log("Error. JSON service is temporarily unavailable.");
      }
    }))};
function columnOne600Question() {($.ajax({
          method: "GET",
          url: "http://www.jservice.io/api/category?id="+categoryIds[0],

          success: function(json) {
              console.log(json);
              $("section")
                .removeClass("hidden")
                .html(json.clues[2].question)
              $("table").addClass("dissapear");
              responsiveVoice.speak(json.clues[2].question.toString());
              correctAnswer = json.clues[2].answer.toLowerCase();
              answerWorth = json.clues[2].value;
              console.log(categoryIds);
          },
          error: function() {
            console.log("Error. JSON service is temporarily unavailable.");
          }
        }))};
function columnOne800Question() {($.ajax({
                  method: "GET",
                  url: "http://www.jservice.io/api/category?id="+categoryIds[0],

                  success: function(json) {
                      console.log(json);
                      $("section")
                        .removeClass("hidden")
                        .html(json.clues[3].question)
                      $("table").addClass("dissapear");
                      responsiveVoice.speak(json.clues[3].question.toString());
                      correctAnswer = json.clues[3].answer.toLowerCase();
                      answerWorth = json.clues[3].value;
                      console.log(categoryIds);
                  },
                  error: function() {
                    console.log("Error. JSON service is temporarily unavailable.");
                  }
                }))};
function columnOne1000Question() {($.ajax({
                          method: "GET",
                          url: "http://www.jservice.io/api/category?id="+categoryIds[0],

                          success: function(json) {
                              console.log(json);
                              $("section")
                                .removeClass("hidden")
                                .html(json.clues[4].question)
                              $("table").addClass("dissapear");
                              responsiveVoice.speak(json.clues[4].question.toString());
                              correctAnswer = json.clues[4].answer.toLowerCase();
                              answerWorth = json.clues[4].value;
                              console.log(categoryIds);
                          },
                          error: function() {
                            console.log("Error. JSON service is temporarily unavailable.");
                          }
                        }))};

function columnTwo200Question() {($.ajax({
      method: "GET",
      url: "http://www.jservice.io/api/category?id="+categoryIds[1],

      success: function(json) {
          console.log(json);
          $("section")
            .removeClass("hidden")
            .html(json.clues[0].question)
          $("table").addClass("dissapear");
          responsiveVoice.speak(json.clues[0].question.toString());
          correctAnswer = json.clues[0].answer.toLowerCase();
          answerWorth = json.clues[0].value;
          console.log(categoryIds);
      },
      error: function() {
        console.log("Error. JSON service is temporarily unavailable.");
      }
    }))};
function columnTwo400Question() {($.ajax({
          method: "GET",
          url: "http://www.jservice.io/api/category?id="+categoryIds[1],

          success: function(json) {
              console.log(json);
              $("section")
                .removeClass("hidden")
                .html(json.clues[1].question)
              $("table").addClass("dissapear");
              responsiveVoice.speak(json.clues[1].question.toString());
              correctAnswer = json.clues[1].answer.toLowerCase();
              answerWorth = json.clues[1].value;
              console.log(categoryIds);
          },
          error: function() {
            console.log("Error. JSON service is temporarily unavailable.");
          }
        }))};
function columnTwo600Question() {($.ajax({
              method: "GET",
              url: "http://www.jservice.io/api/category?id="+categoryIds[1],

              success: function(json) {
                  console.log(json);
                  $("section")
                    .removeClass("hidden")
                    .html(json.clues[2].question)
                  $("table").addClass("dissapear");
                  responsiveVoice.speak(json.clues[2].question.toString());
                  correctAnswer = json.clues[2].answer.toLowerCase();
                  answerWorth = json.clues[2].value;
                  console.log(categoryIds);
              },
              error: function() {
                console.log("Error. JSON service is temporarily unavailable.");
              }
            }))};
function columnTwo800Question() {($.ajax({
                          method: "GET",
                          url: "http://www.jservice.io/api/category?id="+categoryIds[1],

                          success: function(json) {
                              console.log(json);
                              $("section")
                                .removeClass("hidden")
                                .html(json.clues[3].question)
                              $("table").addClass("dissapear");
                              responsiveVoice.speak(json.clues[3].question.toString());
                              correctAnswer = json.clues[3].answer.toLowerCase();
                              answerWorth = json.clues[3].value;
                              console.log(categoryIds);
                          },
                          error: function() {
                            console.log("Error. JSON service is temporarily unavailable.");
                          }
                        }))};
function columnTwo1000Question() {($.ajax({
          method: "GET",
          url: "http://www.jservice.io/api/category?id="+categoryIds[1],

          success: function(json) {
              console.log(json);
              $("section")
                .removeClass("hidden")
                .html(json.clues[4].question)
              $("table").addClass("dissapear");
              responsiveVoice.speak(json.clues[4].question.toString());
              correctAnswer = json.clues[4].answer.toLowerCase();
              answerWorth = json.clues[4].value;
              console.log(categoryIds);
          },
          error: function() {
            console.log("Error. JSON service is temporarily unavailable.");
          }
        }))};

function columnThree200Question() {($.ajax({
              method: "GET",
              url: "http://www.jservice.io/api/category?id="+categoryIds[2],

              success: function(json) {
                  console.log(json);
                  $("section")
                    .removeClass("hidden")
                    .html(json.clues[0].question)
                  $("table").addClass("dissapear");
                  responsiveVoice.speak(json.clues[0].question.toString());
                  correctAnswer = json.clues[0].answer.toLowerCase();
                  answerWorth = json.clues[0].value;
                  console.log(categoryIds);
              },
              error: function() {
                console.log("Error. JSON service is temporarily unavailable.");
              }
            }))};
function columnThree400Question() {($.ajax({
                  method: "GET",
                  url: "http://www.jservice.io/api/category?id="+categoryIds[2],

                  success: function(json) {
                      console.log(json);
                      $("section")
                        .removeClass("hidden")
                        .html(json.clues[1].question)
                      $("table").addClass("dissapear");
                      responsiveVoice.speak(json.clues[1].question.toString());
                      correctAnswer = json.clues[1].answer.toLowerCase();
                      answerWorth = json.clues[1].value;
                      console.log(categoryIds);
                  },
                  error: function() {
                    console.log("Error. JSON service is temporarily unavailable.");
                  }
                }))};
function columnThree600Question() {($.ajax({
                      method: "GET",
                      url: "http://www.jservice.io/api/category?id="+categoryIds[2],

                      success: function(json) {
                          console.log(json);
                          $("section")
                            .removeClass("hidden")
                            .html(json.clues[2].question)
                          $("table").addClass("dissapear");
                          responsiveVoice.speak(json.clues[2].question.toString());
                          correctAnswer = json.clues[2].answer.toLowerCase();
                          answerWorth = json.clues[2].value;
                          console.log(categoryIds);
                      },
                      error: function() {
                        console.log("Error. JSON service is temporarily unavailable.");
                      }
                    }))};
function columnThree800Question() {($.ajax({
                                  method: "GET",
                                  url: "http://www.jservice.io/api/category?id="+categoryIds[2],

                                  success: function(json) {
                                      console.log(json);
                                      $("section")
                                        .removeClass("hidden")
                                        .html(json.clues[3].question)
                                      $("table").addClass("dissapear");
                                      responsiveVoice.speak(json.clues[3].question.toString());
                                      correctAnswer = json.clues[3].answer.toLowerCase();
                                      answerWorth = json.clues[3].value;
                                      console.log(categoryIds);
                                  },
                                  error: function() {
                                    console.log("Error. JSON service is temporarily unavailable.");
                                  }
                                }))};
function columnThree1000Question() {($.ajax({
                  method: "GET",
                  url: "http://www.jservice.io/api/category?id="+categoryIds[2],

                  success: function(json) {
                      console.log(json);
                      $("section")
                        .removeClass("hidden")
                        .html(json.clues[4].question)
                      $("table").addClass("dissapear");
                      responsiveVoice.speak(json.clues[4].question.toString());
                      correctAnswer = json.clues[4].answer.toLowerCase();
                      answerWorth = json.clues[4].value;
                      console.log(categoryIds);
                  },
                  error: function() {
                    console.log("Error. JSON service is temporarily unavailable.");
                  }
                }))};

function columnFour200Question() {($.ajax({
              method: "GET",
              url: "http://www.jservice.io/api/category?id="+categoryIds[3],

              success: function(json) {
                  console.log(json);
                  $("section")
                    .removeClass("hidden")
                    .html(json.clues[0].question)
                  $("table").addClass("dissapear");
                  responsiveVoice.speak(json.clues[0].question.toString());
                  correctAnswer = json.clues[0].answer.toLowerCase();
                  answerWorth = json.clues[0].value;
                  console.log(categoryIds);
              },
              error: function() {
                console.log("Error. JSON service is temporarily unavailable.");
              }
            }))};
function columnFour400Question() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/category?id="+categoryIds[3],

    success: function(json) {
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json.clues[1].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak(json.clues[1].question.toString());
        correctAnswer = json.clues[1].answer.toLowerCase();
        answerWorth = json.clues[1].value;
        console.log(categoryIds);
    },
    error: function() {
      console.log("Error. JSON service is temporarily unavailable.");
    }
  }))};
function columnFour600Question() {($.ajax({
        method: "GET",
        url: "http://www.jservice.io/api/category?id="+categoryIds[3],

        success: function(json) {
            console.log(json);
            $("section")
              .removeClass("hidden")
              .html(json.clues[2].question)
            $("table").addClass("dissapear");
            responsiveVoice.speak(json.clues[2].question.toString());
            correctAnswer = json.clues[2].answer.toLowerCase();
            answerWorth = json.clues[2].value;
            console.log(categoryIds);
        },
        error: function() {
          console.log("Error. JSON service is temporarily unavailable.");
        }
      }))};
function columnFour800Question() {($.ajax({
                    method: "GET",
                    url: "http://www.jservice.io/api/category?id="+categoryIds[3],

                    success: function(json) {
                        console.log(json);
                        $("section")
                          .removeClass("hidden")
                          .html(json.clues[3].question)
                        $("table").addClass("dissapear");
                        responsiveVoice.speak(json.clues[3].question.toString());
                        correctAnswer = json.clues[3].answer.toLowerCase();
                        answerWorth = json.clues[3].value;
                        console.log(categoryIds);
                    },
                    error: function() {
                      console.log("Error. JSON service is temporarily unavailable.");
                    }
                  }))};
function columnFour1000Question() {($.ajax({
                  method: "GET",
                  url: "http://www.jservice.io/api/category?id="+categoryIds[3],

                success: function(json) {
                    console.log(json);
                    $("section")
                      .removeClass("hidden")
                      .html(json.clues[4].question)
                    $("table").addClass("dissapear");
                    responsiveVoice.speak(json.clues[4].question.toString());
                    correctAnswer = json.clues[4].answer.toLowerCase();
                    answerWorth = json.clues[4].value;
                    console.log(categoryIds);
                },
                error: function() {
                  console.log("Error. JSON service is temporarily unavailable.");
                }
              }))};

function columnFive200Question() {($.ajax({
    method: "GET",
    url: "http://www.jservice.io/api/category?id="+categoryIds[4],

    success: function(json) {
        console.log(json);
        $("section")
          .removeClass("hidden")
          .html(json.clues[0].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak(json.clues[0].question.toString());
        correctAnswer = json.clues[0].answer.toLowerCase();
        answerWorth = json.clues[0].value;
        console.log(categoryIds);
    },
    error: function() {
      console.log("Error. JSON service is temporarily unavailable.");
    }
  }))};
function columnFive400Question() {($.ajax({
      method: "GET",
      url: "http://www.jservice.io/api/category?id="+categoryIds[4],

      success: function(json) {
          console.log(json);
          $("section")
            .removeClass("hidden")
            .html(json.clues[1].question)
          $("table").addClass("dissapear");
          responsiveVoice.speak(json.clues[1].question.toString());
          correctAnswer = json.clues[1].answer.toLowerCase();
          answerWorth = json.clues[1].value;
          console.log(categoryIds);
      },
      error: function() {
        console.log("Error. JSON service is temporarily unavailable.");
      }
    }))};
function columnFive600Question() {($.ajax({
      method: "GET",
      url: "http://www.jservice.io/api/category?id="+categoryIds[4],

      success: function(json) {
        console.log(json);
        $("section")
        .removeClass("hidden")
        .html(json.clues[2].question)
        $("table").addClass("dissapear");
        responsiveVoice.speak(json.clues[2].question.toString());
        correctAnswer = json.clues[2].answer.toLowerCase();
        answerWorth = json.clues[2].value;
        console.log(categoryIds);
      },
      error: function() {
        console.log("Error. JSON service is temporarily unavailable.");
      }
    }))};
function columnFive800Question() {($.ajax({
        method: "GET",
        url: "http://www.jservice.io/api/category?id="+categoryIds[4],

        success: function(json) {
            console.log(json);
            $("section")
              .removeClass("hidden")
              .html(json.clues[3].question)
            $("table").addClass("dissapear");
            responsiveVoice.speak(json.clues[3].question.toString());
            correctAnswer = json.clues[3].answer.toLowerCase();
            answerWorth = json.clues[3].value;
            console.log(categoryIds);
        },
        error: function() {
          console.log("Error. JSON service is temporarily unavailable.");
        }
      }))};
function columnFive1000Question() {($.ajax({
      method: "GET",
      url: "http://www.jservice.io/api/category?id="+categoryIds[4],

      success: function(json) {
          console.log(json);
          $("section")
            .removeClass("hidden")
            .html(json.clues[4].question)
          $("table").addClass("dissapear");
          responsiveVoice.speak(json.clues[4].question.toString());
          correctAnswer = json.clues[4].answer.toLowerCase();
          answerWorth = json.clues[4].value;
          console.log(categoryIds);
      },
      error: function() {
        console.log("Error. JSON service is temporarily unavailable.");
      }
    }))};

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
  if (Math.random() < (difficultyLevel * 20)) {
    setTimeout(function() {
      backToBoard();
      disablePlayerSubmits();
      disablePlayersTextbox();
      resetBothUsersTextbox();
      console.log("Computer wins");
      var currentScore = parseInt($("#playerTwoScore").html());
      $("#playerTwoScore").html(currentScore + answerWorth);
    }, timeAlottedForComp);
}   else {
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
  responsiveVoice.speak("Correct");
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
