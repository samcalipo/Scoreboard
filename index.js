//initialise variables
let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

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
    guestScore += 1;
    console.log(guestScore);
    guestScoreEl.textContent = guestScore;
}
function add2G() {
    guestScore += 2;
    console.log(guestScore);
    guestScoreEl.textContent = guestScore;
}
function add3G() {
    guestScore += 3;
    console.log(guestScore);
    guestScoreEl.textContent = guestScore;
}

// reset function
function reset(){
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
    
    
}

//highlight leader function
function checkleader(){
    console.log("winning");
}