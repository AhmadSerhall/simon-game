// Array to hold the game pattern
let gamePattern = [];

// Array to hold the user's pattern
let userClickedPattern = [];

// Colors available in the game
const buttonColors = ["red", "blue", "green", "yellow"];

// Variable to track if the game has started
let gameStarted = false;

// Variable to keep track of the level
let level = 0;

// Function to start the game
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
  }
// Function to handle user clicks
$(".btn").click(function() {
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
// Function to play sound for a color
function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
// Function to animate button presses
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}