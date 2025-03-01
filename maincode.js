import { puzzles } from './constants.js';
const today = new Date();
//change the start date, abc
const startDate = new Date('2025-01-29T19:30:00-07:00');
const number = 1 + Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

var avgScore = 0;
var pageOpen = false;
var streak = 0;
let pastScore = [];
let animationHappening = false;
var animationIndex = 0;
var copyresults = '';
var endresults = '';
var enter_keys_clicked = 0;
var keys_clicked = 0;
let won = [false, false, false, false];
let testing = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let logger = ['sci1', 'his1', 'cul1', 'art1', '', 'sci2', 'his2', 'cul2', 'art2', '', 'sci3', 'his3', 'cul3', 'art3', '', 'sci4', 'his4', 'cul4', 'art4', ''];
let logger_questions = ['sciq','hisq','culq','artq'];
let logger_questionPages = ['questionPageSci', 'questionPageHis', 'questionPageCul', 'questionPageArt'];
let question_levels = [0, 0, 0, 0];

let color_log = ['#aaffaa', '#bbffff', '#aaccff', '#ddaaff']
let gameWon = false;

function calculateAverage(array) {
 if (array != null) {
   const sum = array.reduce((acc, val) => acc + val, 0);
   return array.length ? sum / array.length : 0;
 }
 else {
   return 0;
 }
}
let currentPuzzle = puzzles[(number - 1) % puzzles.length];
let currentAnswers = currentPuzzle.answers;
let currentTheme = currentPuzzle.theme;
let currentFullAnswers = currentPuzzle.fullanswers;
let sciQuestions = currentPuzzle.sciQuestions;
let hisQuestions = currentPuzzle.hisQuestions;
let culQuestions = currentPuzzle.culQuestions;
let artQuestions = currentPuzzle.artQuestions;
let logger_prompts = [sciQuestions, hisQuestions, culQuestions, artQuestions];

let currentEmoji = currentPuzzle.emoji;
document.getElementById('themeText').innerHTML = "<center><b><span style='font-size: 30px'>Theme: " + currentTheme + "</span></b></center>";
document.getElementById('sciq').innerHTML = sciQuestions[0];
document.getElementById('hisq').innerHTML = hisQuestions[0];
document.getElementById('culq').innerHTML = culQuestions[0];
document.getElementById('artq').innerHTML = artQuestions[0];

function saveState() {
 let update = [];
 for (let i = 0; i < logger.length; i++) {
   if (logger[i] != '') {
     update.push(document.getElementById(logger[i]).innerHTML);
     update.push(document.getElementById(logger[i]).style.backgroundColor);
     update.push(document.getElementById(logger[i]).style.color);
   }
 }
 if ((won[0] && won[1] && won[2] && won[3]) || enter_keys_clicked >= 20) {
   var gameWon = true;
 }
 else {
   var gameWon = false;
 }
 update.push(gameWon);
 update.push(keys_clicked);
 update.push(enter_keys_clicked);
 update.push(number);
 update.push(document.getElementById('endpage').innerHTML);
 update.push(question_levels);
 update.push(won);
  console.log("update: " + update);
 localStorage.removeItem('update');
 localStorage.setItem('update', JSON.stringify(update));
}
function loadState() {
 var k = 0;
 const gameStateString = localStorage.getItem('update');
 const gameState = JSON.parse(gameStateString);
  console.log("GameState1: "+gameState);
 if (gameState == null) {
   console.log("GameState2: "+gameState);
   saveState();
   const gameStateString = localStorage.getItem('update');
   const gameState = JSON.parse(gameStateString);
   console.log("GameState3: "+gameState);
 }
 console.log("GameState4: "+gameState);
 if (gameState[51] == number) {
   for (let i = 0; i < logger.length; i++) {
     if (logger[i] != '') {
       document.getElementById(logger[i]).innerHTML = gameState[k * 3];
       document.getElementById(logger[i]).style.backgroundColor = gameState[(k * 3) + 1];
       document.getElementById(logger[i]).style.color = gameState[(k * 3) + 2];
       k ++;
     }
   }
   keys_clicked = gameState[49];
   enter_keys_clicked = gameState[50];
   gameWon = gameState[48];
   won = gameState[54];
   for (let caterpillar=0; caterpillar<4; caterpillar++){
     if (won[caterpillar]){
       document.getElementById(logger_questions[caterpillar]).innerHTML = "You got it!";
     }
     else{
       document.getElementById(logger_questions[caterpillar]).innerHTML = logger_prompts[caterpillar][gameState[53][caterpillar]];
     }
   }
   question_levels = gameState[53];
   for (let b=0;b<4;b++){
     for (let l=0; l<=question_levels[b];l++){
       document.getElementById(logger_questionPages[b]).innerHTML += "<li>" + logger_prompts[b][l].substr(4, logger_prompts[b][l].length) + "</li>";
     }
   }
   if (Boolean(gameWon)) {
     document.getElementById('resultsbutton').style.visibility = 'visible';
     document.getElementById('endpage').innerHTML = gameState[52];
     document.getElementById('copier').style.visibility = 'hidden';
     document.getElementById('X_end').style.visibility = 'hidden';
   }
 }
 else{
   for (let x=0;x<=3;x++){
     document.getElementById(logger_questionPages[x]).innerHTML += "<li>" + logger_prompts[x][0].substr(4, logger_prompts[x][0].length) + "</li>";
   }
 }
}
loadState();

let stringPastScore = localStorage.getItem('score');
pastScore = JSON.parse(stringPastScore);
if (pastScore == "" || pastScore == null) {
 pastScore = [];
}
var avgScore = calculateAverage(pastScore);
localStorage.setItem('score', JSON.stringify(pastScore));
var stringStreakList = localStorage.getItem('streak');
var streakList = JSON.parse(stringStreakList);
if (streakList == "" || streakList == null) {
 streakList = [];
}
var streak = streakList.length;
localStorage.setItem('streak', JSON.stringify(streakList));

function popup() {
 if (pageOpen == false) {
   pageOpen = true;
   document.getElementById('endpage').style.visibility = 'visible';
   document.getElementById('copier').style.visibility = 'visible';
   document.getElementById('X_end').style.visibility = 'visible';
 }
}
window.popup = popup;

function popupQuestions() {
 if (pageOpen == false) {
   pageOpen = true;
   document.getElementById('questionPage').style.visibility = 'visible';
   document.getElementById('X_questions').style.visibility = 'visible';
   const subDivs = document.getElementById("questionPage").querySelectorAll("div");
   subDivs.forEach(subDiv => {
   subDiv.style.visibility = 'visible';
   });
 }
}
window.popupQuestions = popupQuestions;

function XoutEnd() {
 pageOpen = false;
 document.getElementById('endpage').style.visibility = "hidden";
 document.getElementById('resultsbutton').style.visibility = 'visible';
 document.getElementById('copier').style.visibility = "hidden";
 document.getElementById('X_end').style.visibility = "hidden";
}
window.XoutEnd = XoutEnd;

function XoutQuestionsPage() {
 pageOpen = false;
 document.getElementById('questionPage').style.visibility = 'hidden';
 document.getElementById('X_questions').style.visibility = 'hidden';
 const subDivs = document.getElementById("questionPage").querySelectorAll("div");
 subDivs.forEach(subDiv => {
   subDiv.style.visibility = 'hidden';
 });
}
window.XoutQuestionsPage = XoutQuestionsPage;

function Xout(page, X){
 pageOpen = false;
 document.getElementById(page).style.visibility = 'hidden';
 document.getElementById(X).style.visibility = 'hidden'; 
}
window.Xout = Xout;

function openInstructions() {
 if (pageOpen == false) {
   pageOpen = true;
   document.getElementById('instructionsPage').style.visibility = 'visible';
   document.getElementById('X_instructions').style.visibility = 'visible';
 }
 return false;
}
window.openInstructions = openInstructions;

function openInformation() {
 if (pageOpen == false) {
   pageOpen = true;
   document.getElementById('informationPage').style.visibility = 'visible';
   document.getElementById('X_information').style.visibility = 'visible';
 }
}
window.openInformation = openInformation;

function openStats() {
 if (pageOpen == false) {
   pageOpen = true;
   var avgScore = Math.round(calculateAverage(pastScore) * 10) / 10;
   var streak = streakList.length;
   document.getElementById('streakNumber').innerHTML = streak;
   document.getElementById('averageScoreNumber').innerHTML = avgScore;
   document.getElementById('statsPage').style.visibility = 'visible';
   document.getElementById('X_stats').style.visibility = 'visible';
 }
}
window.openStats = openStats;

function submit(){
  if (animationHappening == false && keys_clicked == (enter_keys_clicked + 4)) {
    let animationIndex = 0;
    function endAnimationFunction(){
      for (let i = 1; i <= (4 - (enter_keys_clicked / 5)); i++) {
        setTimeout(() => {
          for (let x=0;x<4;x++){
            if (won[x]==false && i == 1){
              if (keys_clicked < 18) {
                document.getElementById(logger[enter_keys_clicked + x + 5]).style.backgroundColor = color_log[x];
              }
              question_levels[x]+=1;
              document.getElementById(logger_questions[x]).innerHTML = logger_prompts[x][question_levels[x]];
              document.getElementById(logger_questionPages[x]).innerHTML += "<li>" + logger_prompts[x][question_levels[x]].substr(4, logger_prompts[x][question_levels[x]].length) + "</li>"; 
            }
            else if (won[x] && i==1){
              document.getElementById(logger_questions[x]).innerHTML = "You got it!";
            }
            else if (won[x] && i>1){
              document.getElementById(logger[enter_keys_clicked + x + (5 * (i-1))]).style.backgroundColor = '#33A33C';
              document.getElementById(logger[enter_keys_clicked + x + (5 * (i-1))]).style.color = '#fff';
              document.getElementById(logger[enter_keys_clicked + x + (5 * (i-1))]).innerHTML = document.getElementById(logger[enter_keys_clicked + x]).innerHTML;
             document.getElementById(logger[enter_keys_clicked + x + (5 * (i-1))]).classList.add("animateCorrectLetter");
            }
            document.getElementById(logger[enter_keys_clicked+x]).style.border = '1.5px solid black';
          }
        }, i * 200);
      }
      setTimeout(() => {
      enter_keys_clicked += 5;
      keys_clicked += 1;
      saveState();
      if (won[0] && won[1] && won[2] && won[3]) {
        win();
      }
      else if (enter_keys_clicked == 20) {
        win();
      }
      animationHappening = false;
      //document.body.removeEventListener("keydown", eventc);
      },((4 - ((enter_keys_clicked) / 5)) * 200))
    }
    function checkIfRight(){
      if (document.getElementById(logger[enter_keys_clicked + animationIndex]).innerHTML == currentAnswers[animationIndex] && won[animationIndex] == false) {
        document.getElementById(logger[enter_keys_clicked + animationIndex]).style.backgroundColor = '#33A33C';
        document.getElementById(logger[enter_keys_clicked + animationIndex]).style.color = '#fff';
       document.getElementById(logger_questionPages[animationIndex]).innerHTML += "</ul>✅";
        won[animationIndex] = true;
      }
      //check if answer is correct
      if (won[animationIndex] == false) {
        document.getElementById(logger[enter_keys_clicked + animationIndex]).style.backgroundColor = '#636363';
        document.getElementById(logger[enter_keys_clicked + animationIndex]).style.color = '#fff';                 
      }

    if (animationIndex <  3) {
      animationIndex++
      animateDiv(logger[enter_keys_clicked + animationIndex]);  // Animate the next div
    } 
    else {
      // All divs have been processed, call the end animation function
      endAnimationFunction();
    }
    }
    
    function animateDiv(divId){
      if (won[logger.indexOf(divId)%5]){
        animationIndex++
        if (animationIndex <  4) {
          animateDiv(logger[enter_keys_clicked+animationIndex]);
        }
        else{
          endAnimationFunction();
        }
      }
      else{
        if (document.getElementById(divId).innerHTML == currentAnswers[animationIndex]){
          document.getElementById(divId).classList.add("animateCorrectLetter");  // Add animation class
        }
        else{
          document.getElementById(divId).classList.add("animateIncorrectLetter");  // Add animation class
        }
        setTimeout(checkIfRight, 250); 
      }
    }
    
    animationHappening = true;
    animateDiv(logger[enter_keys_clicked]);
  }
}
document.body.addEventListener("keydown", function (eventb) {
 if (pageOpen == false && gameWon == false && animationHappening == false) {
   var letters_right = 0;
   for (let p = 0; p < 4; p++) {
     if (won[p]) {
       letters_right += 1;
     }
   }

   while (won[(keys_clicked % 5)]) {
     keys_clicked += 1;
   }
   for (let i = 65; i < 91; i++) {
     var f = keys_clicked + 1;
     if (eventb.keyCode == i && (f % 5) != 0) {
       document.getElementById(logger[keys_clicked]).innerHTML = String.fromCharCode(eventb.keyCode);
       document.getElementById(logger[keys_clicked]).style.border = '2.5px solid black';
       testing[keys_clicked] = String.fromCharCode(eventb.keyCode);
       keys_clicked += 1
     }
   }
   if (eventb.keyCode == 8 && (keys_clicked % 5) > 0) {
     var backspace = 0
     while (won[(keys_clicked - 1 + backspace) % 5]) {
       backspace -= 1
     }
     document.getElementById(logger[keys_clicked + backspace - 1]).innerHTML = '';
     document.getElementById(logger[keys_clicked + backspace - 1]).style.border = '1.5px solid black';
      document.getElementById("submitButton").style.border = '1px solid black';
     keys_clicked += backspace - 1;
   }

   var f = keys_clicked + 1;
   var letters_right = 0;
   for (let p = 0; p < 4; p++) {
     if (won[p]) {
       letters_right += 1;
     }
   }
   if ((f % 5) % (5 - letters_right) == 0) {
    document.getElementById("submitButton").style.border = '1.4px solid black';
     document.body.addEventListener("keydown", function (eventc) {
       if (eventc.keyCode == 13) {
        submit();
       }
     });
    document.getElementById("submitButton").addEventListener("click", submit);
   }
 }
});
function win() {
 pastScore.push(enter_keys_clicked / 5);
 var avgScore = calculateAverage(pastScore);
 if (streakList[streakList.length - 1] != number - 1 && streakList[streakList.length - 1] != number) {
   streakList = [];
 }
 streakList.push(number);
 var streak = streakList.length;
 localStorage.setItem('streak', JSON.stringify(streakList));
 localStorage.setItem('score', JSON.stringify(pastScore));
 var endresults = "Mnemonicle #" + number
 if (won[0] && won[1] && won[2] && won[3]) {
   var endresults = endresults + '<br><br>You got the Mnemonicle in ' + (enter_keys_clicked / 5) + ' guess(es)!<br><br>';
 }
 else {
   var endresults = endresults + '<br><br>Maybe next time...<br><br>';
 }
 var endresults = endresults + currentEmoji + ' Theme: ' + currentAnswers[0] + currentAnswers[1] + currentAnswers[2] + currentAnswers[3] + ' ' + currentEmoji + '<br>' + currentAnswers[0] + ': ' + currentFullAnswers[0] + '<br>' + currentAnswers[1] + ': ' + currentFullAnswers[1] + '<br>' + currentAnswers[2] + ': ' + currentFullAnswers[2] + '<br>' + currentAnswers[3] + ': ' + currentFullAnswers[3] + '<br>' + '<br>';
 for (let i = 0; i < 4; i++) {
   for (let k = 0; k < 4; k++) {
     if (logger[(5 * k) + i] != '') {
       var endcolor = document.getElementById(logger[(5 * k) + i]);
       if (endcolor.style.backgroundColor == 'rgb(99, 99, 99)') {
         var endresults = endresults + '✖';
       }
       if (endcolor.style.backgroundColor == 'rgb(51, 163, 60)') {
         var endresults = endresults + '✅';
       }
     }
   }
   endresults = endresults + '<br>'
 }
 document.getElementById('endpage').style.visibility = 'visible';
 document.getElementById('endpage').innerHTML = document.getElementById('endpage').innerHTML + '<br>' + endresults;
 document.getElementById('X_end').style.visibility = "visible";
 document.getElementById('copier').style.visibility = 'visible';
 document.getElementById('resultsbutton').style.visibility = 'visible';
  document.getElementById('submitButton').style.visibility = 'hidden';
 saveState();
}
function copy() {
 copyresults = '';
 for (let i = 0; i < 4; i++) {
   for (let k = 0; k < 4; k++) {
     if (logger[(5 * k) + i] != '') {
       var endcolor = document.getElementById(logger[(5 * k) + i]);
       if (endcolor.style.backgroundColor == 'rgb(99, 99, 99)') {
         var copyresults = copyresults + '✖';
       }
       if (endcolor.style.backgroundColor == 'rgb(51, 163, 60)') {
         var copyresults = copyresults + '✅';
       }
     }
   }
   copyresults = copyresults + '\r\n'
 } var guesses = (enter_keys_clicked / 5);
 if (won[0] == false || won[1] == false || won[2] == false || won[3] == false) {
   guesses = 0;
 }
 var copyText = "Mnemonicle #" + number + "\r\n\r\n" + guesses + '/4' + "\r\n\r\n" + copyresults;
 navigator.clipboard.writeText(copyText);
 document.getElementById('copyscreen').style.visibility = 'visible';
 setTimeout(function () {
   document.getElementById('copyscreen').style.visibility = 'hidden';
 }, 1500);
}
window.copy = copy;
