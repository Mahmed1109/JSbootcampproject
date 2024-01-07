const words = [
    "France",
    "Italy",
    "Denmark",
    "Finland",
    "Spain",
    "Portugal",
    "Germany",
    "Greece",
    "Norway",
    "Poland",
    "Sweeden",
    "Turkey"];
const guessButton = document.getElementById("guessButton");


guessButton.addEventListener("click", makeGuess);

let chosenWord = words[Math.floor(Math.random() * words.length)];
//Selects a random number by using math.random and times it by wordlength and rounding it down to whole number which represents string index
let guessedWord = Array(chosenWord.length).fill("_");
//Need to turn to array in order to use the .fill method to change the letters
//Hides the chosen word as _ blanks
let wrongLetters = [];
// used to store the wrong letters user inputs into an array

function displayWord() {
    //use to display current state of correct words
    document.getElementById("word-display").innerText = guessedWord.join(" ");
    //Displays the correct guessed words as a string
}

function displayWrongLetters() {
    //used to display wrong words
    document.getElementById("wrong-letters").innerText = "Wrong letters: " + wrongLetters.join(" , ");
    //converts the wrong letter array into a string to be displayed with a , inbetween
}

function makeGuess() {
    //This function will handle all the guesses the player makes
    const letterInput = document.getElementById("userinput").value.toLowerCase();
    //retrives the user input and then converts it to lowercase to take out case sensitivity
    if (letterInput.length !== 1 || !/[a-z]/.test(letterInput))
    //Checks to see if the user has only put one letter:
    //If  the length of the input is NOT 1 character and its NOT in the alphabet
    //The NOT on the second condition converts the answer to true if there are not lowercase letters
    //The .test method will take the userinput and search it in the a-z catalog
    //.test can ONLY be used for strings
    {
        alert("Please enter a valid single letter.");
        return;
    }

    if (chosenWord.includes(letterInput))
/*Checks to see if any of the randomly selected chosen words letter correlate with the userinput
If its included then output is true and code below executed
*/ {
        for (let i = 0; i < chosenWord.length; i++)
        //Checks the each word/index of the chosen word
        {
            if (chosenWord[i] === letterInput)
            //If any of the chosenword letters match with the userinput
            {
                guessedWord[i] = letterInput;
                //Replace one of the dashed lines hiding the chosen word with the corresponding input from the user
            }
        }
    } else {
        if (!wrongLetters.includes(letterInput))
        //If the userinput is NOT in the current stored array of wrong letters guessed by the user
        {
            wrongLetters.push(letterInput);
            //Add the letter to the array of wrong letters
            //This if statement prevents the user from guessing the letter wrong twice
        }
    }

    displayWord();
    //Takes any correct guesses and adds them into the gaps, function was made above
    displayWrongLetters();
    //Takes any wrong guesses and adds them into the wrong letter list, function was made above

    if (guessedWord.join("") === chosenWord)
    //Check for when the user has guessed the word, converts the guessed word into a string to do this check 
    {
        alert("Congratulations! You guessed the word: " + chosenWord);

        resetGame();
        //Restarts the game when the user presses ok, function below
    } else if (wrongLetters.length === 6)
    //If the user has guessed wrong 6 times. then the following alert is sent and game is restarted
    {
        alert("Sorry! You ran out of attempts. The correct word was: " + chosenWord);
        resetGame();
    }
}

function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    //Used to choose a new word for the user
    guessedWord = Array(chosenWord.length).fill("_");
    //Resets the gaps to word length of the new word
    wrongLetters = [];
    //Empties the wrong letter array
    displayWord();
    //Resets the guesswords in the gaps
    displayWrongLetters();
    //Resets and clears the wrong letters
    document.getElementById("userinput").value = "";
    //Clears the userinput field
}
