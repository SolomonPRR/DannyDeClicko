const tickRate = 1000 / 100; // 100 frames per second(fps)
let score = 0;
let overallCPS = 0;

// Buildings are made from classes here.
let shrine = new Building('shrineButton', 'Shrine', 15, 0.1);
let dannyDorito = new Building('dannyDoritoButton', 'Danny Dorito', 100, 1);
let trashMan = new Building('trashManButton', 'Trash Man', 1100, 8);
let dannyBurrito = new Building(
    'dannyBurritoButton',
    'Danny Burrito',
    12000,
    47
);

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

function incScore() {
    score +=
        shrine.currentCPS +
        dannyDorito.currentCPS +
        trashMan.currentCPS +
        dannyBurrito.currentCPS;
}

function updateButtons() {
    shrine.buttonState();
    dannyDorito.buttonState();
    trashMan.buttonState();
    dannyBurrito.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    document.getElementById('score').innerHTML =
        'D$' + Math.floor(score).toLocaleString();
    document.getElementById('overallCPS').innerHTML = overallCPS;
    updateButtons();
}
setInterval(updatePage, tickRate);
