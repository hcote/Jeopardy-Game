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
var categoryIds = [];

//Randomize Category For Each Column
$("button").on('click', function() {($.ajax({
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
$("button").on('click', function() {($.ajax({
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
$("button").on('click', function() {($.ajax({
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
$("button").on('click', function() {($.ajax({
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
$("button").on('click', function() {($.ajax({
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

//Assigns the columns questions to the randomnly assigned column header
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
$(".columnone200").on('click', function() {
  columnOne200Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnone400").on('click', function() {
  columnOne400Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnone600").on('click', function() {
  columnOne600Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnone800").on('click', function() {
  columnOne800Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnone1000").on('click', function() {
  columnOne1000Question();
  enablePlayerSubmits();
  setTimer();
});

$(".columntwo200").on('click', function() {
  columnTwo200Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columntwo400").on('click', function() {
  columnTwo400Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columntwo600").on('click', function() {
  columnTwo600Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columntwo800").on('click', function() {
  columnTwo800Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columntwo1000").on('click', function() {
  columnTwo1000Question();
  enablePlayerSubmits();
  setTimer();
});

$(".columnthree200").on('click', function() {
  columnThree200Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnthree400").on('click', function() {
  columnThree400Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnthree600").on('click', function() {
  columnThree600Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnthree800").on('click', function() {
  columnThree800Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnthree1000").on('click', function() {
  columnThree1000Question();
  enablePlayerSubmits();
  setTimer();
});

$(".columnfour200").on('click', function() {
  columnFour200Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfour400").on('click', function() {
  columnFour400Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfour600").on('click', function() {
  columnFour600Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfour800").on('click', function() {
  columnFour800Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfour1000").on('click', function() {
  columnFour1000Question();
  enablePlayerSubmits();
  setTimer();
});

$(".columnfive200").on('click', function() {
  columnFive200Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfive400").on('click', function() {
  columnFive400Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfive600").on('click', function() {
  columnFive600Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfive800").on('click', function() {
  columnFive800Question();
  enablePlayerSubmits();
  setTimer();
});
$(".columnfive1000").on('click', function() {
  columnFive1000Question();
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
