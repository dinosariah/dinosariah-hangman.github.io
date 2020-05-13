let word = prompt("Enter your chosen word, please:");
let guessedLetters = [];
let svg = Snap("#hangman");
var wrongGuessed = 0;
console.log(word);
showWord(word);

document.onkeyup = function(event) {
  console.log(event.key);
  if (guessedLetters.includes(event.key)) {
    //letter was akready guessed
  } else {
    guessedLetters.push(event.key);
    if (word.includes(event.key)) {
      showWord(word);
    } else {
      wrongGuessed++;
      console.log(`Number of wrong guesses is ${wrongGuessed}`);
      drawHangman(wrongGuessed);
      if (wrongGuessed >= 10) {
        alert("You lost!");
      }
    }
  }
};

function showWord(word) {
  let hiddenWord = word;

  for (var i = 0; i < hiddenWord.length; i++) {
    if (
      !guessedLetters.includes(hiddenWord[i].toLowerCase()) &&
      hiddenWord[i] !== " "
    ) {
      hiddenWord = hiddenWord.replace(hiddenWord[i], "-");
    }
  }

  if (!hiddenWord.includes("-")) {
    alert("You guessed the word!");
  }

  document.getElementById("word").innerText = hiddenWord;
}

function drawHangman(numberOfWrongGuesses) {
  if (numberOfWrongGuesses === 1) {
    svg.line(50, 450, 150, 450);
  } else if (numberOfWrongGuesses === 2) {
    svg.line(100, 100, 100, 450);
  } else if (numberOfWrongGuesses === 3) {
    svg.line(100, 100, 300, 100);
  } else if (numberOfWrongGuesses === 4) {
    svg.line(300, 100, 300, 150);
  } else if (numberOfWrongGuesses === 5) {
    svg.circle(300, 175, 25);
  } else if (numberOfWrongGuesses === 6) {
    svg.line(300, 200, 300, 300);
  } else if (numberOfWrongGuesses === 7) {
    svg.line(300, 250, 250, 210);
  } else if (numberOfWrongGuesses === 8) {
    svg.line(300, 250, 350, 210);
  } else if (numberOfWrongGuesses === 9) {
    svg.line(300, 300, 250, 340);
  } else if (numberOfWrongGuesses === 10) {
    svg.line(300, 300, 350, 340);
  }
}
