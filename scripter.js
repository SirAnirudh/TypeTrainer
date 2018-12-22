window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

var word = '';
var colorTracker = 0;


// To change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game
function init() {
    showWord();

    showSeconds();

    //calls countdown every second
    setInterval(countdown, 1000);

    //check game status every 3 secnds
    setInterval(checkStatus, 3000);

    //match word

    wordInput.addEventListener('input', match)

  
}

function match(){
    if(wordInput.value === currentWord.innerHTML){
            message.innerHTML.innerHTML = "correct";
            time = currentLevel+1;
            isPlaying = true;
            showWord();
            wordInput.value = '';
            score++;
        }
    showScore();    
}

function showScore(){
    if (score == -1){
        scoreDisplay.innerHTML = '';
    }

    else{
        scoreDisplay.innerHTML = score;

    }
}

// Pick & show random word
function showWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  word = words[randIndex];
  currentWord.innerHTML = word;
}

function showSeconds(){
    seconds.innerHTML = time;
}

function countdown(){
    if (time > 0){
        time--;
    }

    else if (time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if (!isPlaying && time == 0){
        message.innerHTML = "Game Over";
        score = -1;
    }

    else{
        message.innerHTML = "";

    }
}