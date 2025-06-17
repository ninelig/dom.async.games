
function generateRandomNumber(){
    const randomNumber =  Math.floor(Math.random() * 20) + 1;

    console.log('Random Number', randomNumber);
    return randomNumber;
 }
 
 module.exports = generateRandomNumber;

 const INITIAL_SCORE = 20;

 let scoreValue = INITIAL_SCORE;
 let highscoreValue = 0;
 let secretNumber = generateRandomNumber();
 

document.addEventListener("DOMContentLoaded", () => {

  const againBtn = document.getElementById("againBtn");
  const guessNumberInput = document.getElementById("guessNumberInput");
  const checkBtn = document.getElementById("checkBtn");
  const message = document.getElementById("message");
  const score = document.querySelector("#score");
  const highscore = document.querySelector("#highscore");
  const secretNumberContainer = document.querySelector("#secretNumberContainer");
  const mainContainer = document.getElementById("main-container");



   checkBtn.addEventListener("click", function() {

    const guessValue = guessNumberInput.value;
  
    let messageValue = '';
    let isGameOver = false;

    

    if (guessValue == secretNumber) {
       messageValue = "Correct Number!";

       secretNumberContainer.innerHTML = secretNumber;
       
       if(scoreValue > highscoreValue) {
         highscoreValue = scoreValue;
         highscore.textContent = highscoreValue;

       }
       
       mainContainer.style.backgroundColor = "green";

       isGameOver = true;

    } else {
        messageValue = (guessValue > secretNumber) ? 'Too high!' : 'Too low!';
        scoreValue--;
        score.textContent = scoreValue; 

        if(scoreValue <= 0){
            messageValue = "You lost the game!";
            mainContainer.style.backgroundColor = "red";
            isGameOver = true;
        }
    }
    message.textContent = messageValue;

    guessNumberInput.value = '';

    if (isGameOver) {
        checkBtn.disabled = true;
    }


   });




   againBtn.addEventListener("click", () => {
        secretNumber = generateRandomNumber();
        checkBtn.disabled = false;
        scoreValue = INITIAL_SCORE;

        score.textContent = INITIAL_SCORE;
        mainContainer.style.backgroundColor = "";

        secretNumberContainer.innerHTML = '?';
      
   });





});