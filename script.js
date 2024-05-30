let teamA = "TEAM A";
function selectTeam() {
    let userInput = prompt("Enter a name for Team A");
    if (userInput !== null && userInput !== "") {
        teamA = userInput;
        document.getElementById("teamA").textContent = teamA;
    } else {
        alert("Please enter team name.");
    }
}

let scoreOne = 0;

function hightScore() {
    scoreOne++;
    document.getElementById("scoreOne").innerHTML = scoreOne;
}

function lowScore() {
    scoreOne--;
    if (scoreOne < 0) {
        alert("Just enter numbers");
        scoreOne = 0;
    } else {
        document.getElementById("scoreOne").innerHTML = scoreOne;
    }
}

function resetScore() {
    document.getElementById("scoreOne").textContent = scoreOne;
    if (scoreOne >= 0) {
        scoreOne = 0;
        document.getElementById("scoreOne").textContent = scoreOne;
    } else {
        document.getElementById("scoreOne").textContent = scoreOne;
    }
}

function confirmScore() {
    document.getElementById("scoreOne").textContent = scoreOne;
    scoreOne >= 0;
    scoreOne = prompt("Choose your score");
    document.getElementById("scoreOne").textContent = scoreOne;


    if (isNaN(scoreOne)) {
        alert("Please enter a valid number.");
        scoreOne = 0;
        document.getElementById("scoreOne").textContent = scoreOne;
    } else {
        console.log("A valid number:" + score);
    }
}

let teamB = "TEAM B";
function selectTeamB() {
    let userInput = prompt("Enter a name for Team B");
    if (userInput !== null && userInput !== "") {
        teamB = userInput;
        document.getElementById("teamB").textContent = teamB;
    } else {
        alert("Please enter team name.");
    }
}

let scoreSecond = 0;


function hightScoreB() {
    scoreSecond++;
    document.getElementById("scoreSecond").textContent = scoreSecond;
}


function lowScoreB() {
    scoreSecond--;
    if (scoreSecond < 0) {
        alert("Just enter numbers.");
        scoreSecond = 0;
    } else {
        document.getElementById("scoreSecond").textContent = scoreSecond;
    }
}

function resetScoreB() {
    document.getElementById("scoreSecond").textContent = scoreSecond;
    if (scoreSecond >= 0) {
        scoreSecond = 0;
        document.getElementById("scoreSecond").textContent = scoreSecond;
    } else {
        document.getElementById("scoreSecond").textContent = scoreSecond;
    }
}

function confirmScoreB() {
    document.getElementById("scoreSecond").textContent = scoreSecond;
    scoreSecond >= 0;
    scoreSecond = prompt("Choose your score");
    document.getElementById("scoreSecond").textContent = scoreSecond;


    if (isNaN(scoreSecond)) {
        alert("Please enter a valid number.");
        scoreSecond = 0;
        document.getElementById("scoreSecond").textContent = scoreSecond;
    } else {
        console.log("A valid number:" + scoreSecond);
    }
}