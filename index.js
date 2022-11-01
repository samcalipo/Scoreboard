//initialise variables
let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementById("homeScore");
let awayScoreEl = document.getElementById("awayScore");

//home score functions
function add1H() {
    homeScore += 1;
    console.log(homeScore);
    homeScoreEl.textContent = homeScore;
}
function add2H() {
    homeScore += 2;
    console.log(homeScore);
    homeScoreEl.textContent = homeScore;
}
function add3H() {
    homeScore += 3;
    console.log(homeScore);
    homeScoreEl.textContent = homeScore;
}

//Guest score functions
function add1G() {
    awayScore += 1;
    console.log(awayScore);
    awayScoreEl.textContent = awayScore;
}
function add2G() {
    awayScore += 2;
    console.log(awayScore);
    awayScoreEl.textContent = awayScore;
}
function add3G() {
    awayScore += 3;
    console.log(awayScore);
    awayScoreEl.textContent = awayScore;
}

// reset function
function reset(){
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    
    awayScore = 0;
    awayScoreEl.textContent = awayScore;
    
    
}

//highlight leader function
function checkleader(){
    console.log("winning");
}