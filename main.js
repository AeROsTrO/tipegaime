window.addEventListener('load', init);
//available levels
const levels = {
    easy: 10, medium: 7, hard: 3
}
//to change level
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

var curLevel = levels.medium;

let time = curLevel;
let score = 0;
let hss = 0;
let isPlaying;//if game is gng on or not
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const hs = document.querySelector('#highscore');

const words = [
    'hello', 'how', 'are', 'you', 'this', 'is', 'fun',
    'i', 'am', 'bored', 'is', 'a', 'type', 'game', 'what',
    'upto', 'beautiful', 'know', 'adios', 'italy', 'yooo', 'dishes', 'mop', 'rain', 'moon', 'uranus', 'jupiter', 'saturn', 'supernova', 'cosmos', 'space', 'mars', 'james', 'webb', 'telescope'
];

//initialise game
function init() {

    //show number of seconds in UI
    seconds.innerHTML = curLevel;
    //load random one from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check status of game
    setInterval(checkStatus, 50);
}

//pick and show random word
function showWord(words) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //out put random word
    currentWord.innerHTML = words[randIndex];
}
function countdown() {
    //make sure time is not run out
    if (time > 0) time--;
    else if (time === 0) {
        //game is over
        isPlaying = false;
    }
    //show time 
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time == 0) {
        message.innerHTML = 'uh       ohh!!! :,)';
        score = -1;
    }
}
//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = curLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
        hss = Math.max(score, hss);
    }
    //if score is -1 display 0;
    score === -1 ? scoreDisplay.innerHTML = 0 : scoreDisplay.innerHTML = score;
    hs.innerHTML = hss;


}
//match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'you are awesome!!';
        return true;
    }
    else {
        message.innerHTML = ''; return false;
    }
}