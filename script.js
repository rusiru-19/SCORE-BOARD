// Initial scores
let scorePlayer1 = 0;
let scorePlayer2 = 0;

// Update scores function
function updateScores() {
    document.getElementById('scorePlayer1').textContent = scorePlayer1;
    document.getElementById('scorePlayer2').textContent = scorePlayer2;
}

// Event listener for key presses
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();

    // Update scores based on key presses
    if (key === 'q') {
        scorePlayer1++;
    } else if (key === 'z') {
        scorePlayer2++;
    } else if (key === 'w'){
        scorePlayer1--;
    } else if (key === 'x') {
        scorePlayer2--;
    }

    // Update the scoreboard
    updateScores();
});
