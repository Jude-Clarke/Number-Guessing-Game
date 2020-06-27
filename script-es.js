
// function getTitle(){
//     var title = document.getElementById("title");
//     return title;
// }
function english(){
    location.assign("Guessing-game.html")
    };


function getStartButton(){
    var button = document.getElementById("Start");
    return button;
    }
function updateButton(){
    var startButton = getStartButton();
    startButton.innerHTML = "Jugar de Nuevo";
    }
const Average =arr => {
    const reducer = (total, currentValue) => total + currentValue
    const sum = arr.reduce(reducer);
    return sum / arr.length;
}

var difficulty ="none"

function easy(){
        difficulty = "easy";
        var diff = document.getElementById("diff");
        diff.innerHTML= "Dificultad: Fácil";
        alert("Adivina un número entre 1 y 10");
        console.log ("Difficulty is easy.");
        }
    function medium(){
        difficulty = "medium";
        var diff = document.getElementById("diff");
        diff.innerHTML= "Dificultad: Medio";
        alert("Adivina un número entre 1 y 100");
        console.log ("Difficulty is medium.");
    }
    function hard() {
            difficulty = "hard";
            var diff = document.getElementById("diff");
            diff.innerHTML= "Dificultad: Difícil";
            alert("Adivina un número entre 1 y 1000");
            console.log ("Difficulty is hard.");
        }
    function impossible(){
            difficulty = "impossible";
            var diff = document.getElementById("diff");
            diff.innerHTML= "Dificultad: Imposible";
            alert("Adivina un número entre 1 y 100.000");
            console.log ("Difficulty is impossible.");
        }

function assignAnswer() {
    if (difficulty == "easy") {
        answer = Math.floor((Math.random() * 10) + 1);
        // Begin();
    };
    if (difficulty == "medium") {
        answer = Math.floor((Math.random() * 100) + 1);
        // Begin();
    };
    if (difficulty == "hard") {
        answer = Math.floor((Math.random() * 1000) + 1);
        // Begin();
    };
    if (difficulty == "impossible") {
        answer = Math.floor((Math.random() * 100000) + 1);
        // Begin();
    };
};
// Maybe define Begin() first if I want the game to begin on selection of difficulty.


var average = [];
var record = [];
var input
var guess
var easyScorekeeper = [];
var mediumScorekeeper = [];
var hardScorekeeper = [];
var impossibleScorekeeper = [];
var scorekeeper = [
    [easyScorekeeper],
    [mediumScorekeeper],
    [hardScorekeeper],
    [impossibleScorekeeper],
];

function Begin() {

    var guesses = [];
    // var wrongGuesses = guesses.shift();
    function getScore(){
    var score = document.getElementById("score");
    return score;
    }
    function updateScore(){
        var yourScore = getScore();
        yourScore.innerHTML = "Tu Puntaje: " + "<br/>" + tries;
        }

    function getScorekeeper(){
    var scorekeeper = document.getElementById("scorekeeper");
    return scorekeeper;
    }
    function updateScorekeeper(){
        var yourScorekeeper = getScorekeeper();
        yourScorekeeper.setAttribute("style", "text-align: center;");
        yourScorekeeper.innerHTML = "<u>Tu registro</u>" + "<br/>" + record.join("<br/>");
        }
    function Average(){
        var sum = record.reduce((previous, current) => current += previous);
        var avg = sum / record.length;
        return avg;
    }
    function getAverage(){
    var average = document.getElementById
    ("average");
    return average;
    }
    function updateAverage(){
        var yourAverage = getAverage();
        var avg = Math.round(Average(record) * 100) / 100
        var avge = avg.toString();
        yourAverage.setAttribute("style", "text-align: center;");
        yourAverage.innerHTML = "Tu Promedio: " + "<br/>" + avge.replace(/\./g, ',');
    }
    function getGuessHistory(){
    var guessHistory = document.getElementById("guess-history");
    return guessHistory;
    }
    function updateGuessHistory(){
        var guessHistory = getGuessHistory();
        guessHistory.innerHTML = "<strong>" + "Número Correcto: " + guesses[0] + "</strong>" + "<br/>" + "Tus Soposiciones: " + "<br/>" + guesses.join(" | ");
        }


    assignAnswer();

    function setGuess() {
        // guess = Number(prompt("What's your first guess?"));
        input = prompt("¿Cuál es tu primera suposición?");
        guess = parseFloat(input.replace(/\./g, ''));
    };
    function resetGuess() {
        // guess = Number(prompt("What's your next guess?"));
        input = prompt("¿Cuál es tu proxima suposición?");
        guess = parseFloat(input.replace(/\./g, ''));
    };
    setGuess();


    while(guess ==" "){
        setGuess();
    };

    var tries = 1;

    while(guess !== answer && guess !== null) {

        //Find a way to get the cancel button to work beyond the first guess.
        if(guess!=answer && guess != " ") {
            // points-=78789;
            tries++;
            guesses.unshift(input);
        };
        if(guess>answer) {
            alert("Menos");
        };
        if(guess<answer && guess != " ") {
            alert("Más");
        };

        resetGuess();
        };

    if(guess===answer) {
        guesses.unshift(input);
        alert("¡Eso! Bueno, eso no fue tan difícil, ¿verdad?");
        // console.log("Score= " + (points));
        console.log("Tries= " + (tries));
        if (difficulty == "easy") {
            easyScorekeeper.unshift(tries);
        }
        if (difficulty == "medium") {
            mediumScorekeeper.unshift(tries);
        }
        if (difficulty == "hard") {
            hardScorekeeper.unshift(tries);
        }
        if (difficulty == "impossible") {
            impossibleScorekeeper.unshift(tries);
    }
    if (difficulty == "easy") {
        record = easyScorekeeper;
    };
    if (difficulty == "medium") {
        record = mediumScorekeeper;
    };
    if (difficulty == "hard") {
        record = hardScorekeeper;
    };
    if (difficulty == "impossible") {
        record = impossibleScorekeeper;
    };
        console.log(scorekeeper[0]);
        console.log("Here are your guesses: " + guesses);
        updateButton();
        updateScore();
        updateScorekeeper();
        updateAverage();
        updateGuessHistory();
        }
}

function bootup() {
    // debugger;

    if (difficulty == "none") {
        alert ("Por favor, seleccione tu dificultad");
    }
    if (difficulty != "none") {
        Begin();
    }
};

function reset() {
    location.reload();
};
