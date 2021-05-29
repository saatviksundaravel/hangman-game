var words = [
"APPLE", 
"ORANGE", 
"BANANA", 
"MANGO", 
"GRAPES", 
"POMEGRANATE", 
"LEMON", 
"CUCUMBER",
"STRAWBERRY",
"ZEBRA",
"BEAR",
"TIGER",
"LION",
"HIPPOPOTAMUS",
"CAR",
"BIKE",
"TRUCK",
"SCOOTER",
"CHAIR",
"TELEVISION",
"COMPUTER",
"MOUNTAIN",
"RIVER",
"BUILDING",
"VEGETABLE",
"CALCULATOR",
"GOVERNMENT",
"FATHER",
"MOTHER",
"DOCTOR",
"SPEAKER",
"WATER",
"WATCH",
"TREE",
"ANTENNA",
"TABLE",
"FRIEND",
"BROTHER",
"SISTER",
"CHILDREN",
"TEACHER",
"STUDENT",
"ROCKET",
"GOLD",
"WORLD",
"BISCUIT",
"APARTMENT",
"BOARD",
"MONEY",
"BACKGROUND"];



var enteredLetters = [];
var guessingWord = [];
var word = "";
var mistakes = 0;
var gamesWon = 0;
var totalGames = 0;
var gamePlaying = false;


window.addEventListener("keydown", onKeyDown);

function onKeyDown(event) {
    keyCode = event.keyCode;

    if (keyCode == 97 || keyCode == 65) {
        console.log("You pressed A");
        userPressed("A");
    }

    if (keyCode == 98 || keyCode == 66) {
        console.log("You pressed B");
        userPressed("B")
    }

    if (keyCode == 99 || keyCode == 67) {
        console.log("You pressed C");
        userPressed("C")
    }

    if (keyCode == 100 || keyCode == 68) {
        console.log("You pressed D");
        userPressed("D")
    }

    if (keyCode == 101 || keyCode == 69) {
        console.log("You pressed E");
        userPressed("E")
    }

    if (keyCode == 102 || keyCode == 70) {
        console.log("You pressed F");
        userPressed("F")
    }

    if (keyCode == 103 || keyCode == 71) {
        console.log("You pressed G");
        userPressed("G")
    }

    if (keyCode == 104 || keyCode == 72) {
        console.log("You pressed H");
        userPressed("H")
    }

    if (keyCode == 105 || keyCode == 73) {
        console.log("You pressed I");
        userPressed("I")
    }

    if (keyCode == 106 || keyCode == 74) {
        console.log("You pressed J");
        userPressed("J")
    }

    if (keyCode == 107 || keyCode == 75) {
        console.log("You pressed K");
        userPressed("K")
    }

    if (keyCode == 108 || keyCode == 76) {
        console.log("You pressed L");
        userPressed("L")
    }

    if (keyCode == 109 || keyCode == 77) {
        console.log("You pressed M");
        userPressed("M")
    }

    if (keyCode == 110 || keyCode == 78) {
        console.log("You pressed N");
        userPressed("N")
    }

    if (keyCode == 111 || keyCode == 79) {
        console.log("You pressed O");
        userPressed("O")
    }

    if (keyCode == 112 || keyCode == 80) {
        console.log("You pressed P");
        userPressed("P")
    }

    if (keyCode == 113 || keyCode == 81) {
        console.log("You pressed Q");
        userPressed("Q")
    }

    if (keyCode == 114 || keyCode == 82) {
        console.log("You pressed R");
        userPressed("R")
    }

    if (keyCode == 115 || keyCode == 83) {
        console.log("You pressed S");
        userPressed("S")
    }

    if (keyCode == 116 || keyCode == 84) {
        console.log("You pressed T");
        userPressed("T")
    }

    if (keyCode == 117 || keyCode == 85) {
        console.log("You pressed U");
        userPressed("U")
    }

    if (keyCode == 118 || keyCode == 86) {
        console.log("You pressed V");
        userPressed("V")
    }

    if (keyCode == 119 || keyCode == 87) {
        console.log("You pressed W");
        userPressed("W")
    }

    if (keyCode == 120 || keyCode == 88) {
        console.log("You pressed X");
        userPressed("X")
    }

    if (keyCode == 121 || keyCode == 89) {
        console.log("You pressed Y");
        userPressed("Y")
    }

    if (keyCode == 122 || keyCode == 90) {
        console.log("You pressed Z");
        userPressed("Z")
    }
}


function buttonClicked(buttonId) {

    userPressed(buttonId[buttonId.length - 1]);
}

function userPressed(alphabet) {

    if (gamePlaying === false)
        return;

    document.getElementById("button" + alphabet).disabled = true;

    if (alreadyEntered(alphabet) == false) {

        markAsPressed(alphabet);
        if (wordContainsAlphabet(alphabet)) {

            revealAlphabet(alphabet);
        } else {
            ++mistakes;
            document.getElementById("hangManImage").src = "img" + mistakes + ".png";
        }

        if (wordGuessed()) {
            document.getElementById("gameResult").innerHTML = "You Won :)";
            endGame(true);
        }
        if (mistakes == 5) {
            document.getElementById("gameResult").innerHTML = "You lost :(";
            endGame(false);
        }
    }
}


function wordContainsAlphabet(alphabet) {
    if (word.indexOf(alphabet) === -1) {
        return false;
    } else {
        return true;
    }
}

function markAsPressed(alphabet) {
    enteredLetters.push(alphabet);
}

function revealAlphabet(alphabet) {
    for (i = 0; i < word.length; ++i) {
        if (word[i] === alphabet) {
            guessingWord[i] = alphabet;
        }
    }
    document.getElementById("guessingWord").innerHTML = guessingWord.join("  ");

}

function wordGuessed() {
    if (guessingWord.indexOf("_") === -1) {
        return true;
    } else {
        return false;
    }
}

function initialize() {

    guessingWord = [];
    enteredLetters = [];
    mistakes = 0;
    gamePlaying = true;

    word = randomWord()
    initializeGuessingWord(word)
    console.log("Word: " + word);
    document.getElementById("hangManImage").src="img0.png";
    document.getElementById("guessingWord").innerHTML = guessingWord.join("  ");
    document.getElementById("gameResult").innerHTML = "";
    document.getElementById("total_games").innerHTML="Total Games: "+totalGames;
    document.getElementById("games_won").innerHTML="Games Won: "+gamesWon;
    document.getElementById("playAgain").style.visibility="hidden";
    

    enableAllButtons();

}

function randomWord() {
    randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function alreadyEntered(letter) {
    capitalLetter = letter.toUpperCase();
    for (i = 0; i < enteredLetters.length; ++i) {
        if (enteredLetters[i] === capitalLetter) {
            return true;
        }
    }
    return false;
}

function initializeGuessingWord(word) {
    guessingWord = [];
    for (i = 0; i < word.length; ++i) {
        guessingWord[i] = "_";
    }
}

function revealAllAlphabets() {
    for (i = 0; i < word.length; ++i)
        guessingWord[i] = word[i];

    document.getElementById("guessingWord").innerHTML = guessingWord.join("  ");
}

function endGame(won) {
    ++totalGames;
    if (won)
        ++gamesWon;
    else
        revealAllAlphabets();

    //update total games
    document.getElementById("total_games").innerHTML = "Total Games: " + totalGames
    //update games won
    document.getElementById("games_won").innerHTML = "Games Won: " + gamesWon
    //game playing is false so as to ignore any key press or button press
    gamePlaying = false;
    document.getElementById("playAgain").style.visibility="visible";


}

function playAgain(){
    initialize();
}

function enableAllButtons(){
    document.getElementById("buttonA").disabled=false;
    document.getElementById("buttonB").disabled=false;
    document.getElementById("buttonC").disabled=false;
    document.getElementById("buttonD").disabled=false;
    document.getElementById("buttonE").disabled=false;
    document.getElementById("buttonF").disabled=false;
    document.getElementById("buttonG").disabled=false;
    document.getElementById("buttonH").disabled=false;
    document.getElementById("buttonI").disabled=false;
    document.getElementById("buttonJ").disabled=false;
    document.getElementById("buttonK").disabled=false;
    document.getElementById("buttonL").disabled=false;
    document.getElementById("buttonM").disabled=false;
    document.getElementById("buttonN").disabled=false;
    document.getElementById("buttonO").disabled=false;
    document.getElementById("buttonP").disabled=false;
    document.getElementById("buttonQ").disabled=false;
    document.getElementById("buttonR").disabled=false;
    document.getElementById("buttonS").disabled=false;
    document.getElementById("buttonT").disabled=false;
    document.getElementById("buttonU").disabled=false;
    document.getElementById("buttonV").disabled=false;
    document.getElementById("buttonW").disabled=false;
    document.getElementById("buttonX").disabled=false;
    document.getElementById("buttonY").disabled=false;
    document.getElementById("buttonZ").disabled=false;
}
