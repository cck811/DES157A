(function(){
    'use strict'; 
    console.log('Reading JS');

    // Initialization of variables
    const playerScores = [0, 0]; // Array to hold scores of the two players
    let currentPlayer = 0; // Variable to track the current player (0 for Player 1 and 1 for Player 2)
    const winningScore = 12; // Score needed to win the game

    // DOM elements for displaying scores
    const scoreElements = [
        document.querySelector('#player1 .score-value'), // Player 1's score display element
        document.querySelector('#player2 .score-value')  // Player 2's score display element
    ];
    const messageDiv = document.getElementById('messages'); // Element for displaying messages
    const turnMessageDiv = document.getElementById('turnMessages');
    const winningScreenBackground = document.getElementById('winning-screen-background');
    const winningScreen = document.getElementById('winning-screen');
    const winningMessageDiv = document.getElementById('winning-messages');
    const startGameButton = document.getElementById('startgame'); // Button to start the game
    const cardButtons = document.querySelectorAll('.card'); // NodeList of all the card buttons

    // Function to initialize the game
    function startGame() {
        playerScores[0] = 0; // Reset Player 1's score
        playerScores[1] = 0; // Reset Player 2's score
        currentPlayer = 0; // Set the current player to Player 1
        let shuffledCards = shuffleCards(); // Shuffle the card values
        
        // Assign shuffled values to card buttons
        cardButtons.forEach((button, index) => {
            button.dataset.value = shuffledCards[index];
        });
        updateScores(); // Update the scores display
        messageDiv.textContent = "Player 1 starts the game!"; // Display starting player message
        turnMessageDiv.textContent = "Pick a Card!";

        startGameButton.style.display = 'none'; // Hide the start game button
        winningScreen.style.display = 'none';
        winningScreenBackground.style.display = 'none';
    }

    // Function to update scores on the screen
    function updateScores() {
        scoreElements[0].textContent = playerScores[0]; // Update Player 1's score display
        scoreElements[1].textContent = playerScores[1]; // Update Player 2's score display
    }
    
    // Function to shuffle card values
    function shuffleCards() {
        let cardValues = [1, 2, 3, 4, 5, 6]; // Array of card values
        for (let i = cardValues.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]]; // Swap elements
        }
        return cardValues; // Return the shuffled array
    }

    // Function to handle card pick
    function pickCard(event) {
        let cardValue = parseInt(event.target.dataset.value); // Get the value of the clicked card

        switch (cardValue) { // Switch statement for different card values
            case 1:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 1 point!`;
                break;
            case 2:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 2 point!`;
                break;
            case 3:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 3 point!`;
                break;
            case 4:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 4 point!`;
                break;
            case 5:
                // Reduce player score by 2
                playerScores[currentPlayer] = Math.max(0, playerScores[currentPlayer] - 2);
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} loses 2 point!`;
                break;
            case 6:
                // Reset player's score
                playerScores[currentPlayer] = playerScores[currentPlayer] - playerScores[currentPlayer];
                turnMessageDiv.textContent = `Player ${currentPlayer + 1}'s lost all scores!`;
                break;
        }

        // Shuffle the cards after handling the current pick
        let shuffledCards = shuffleCards();
        cardButtons.forEach((button, index) => {
            button.dataset.value = shuffledCards[index];
        });
        
        // Check for a winning condition
        if (playerScores[currentPlayer] >= winningScore) {
            // Declare current player as winner
            messageDiv.textContent = `Player ${currentPlayer + 1} wins with ${playerScores[currentPlayer]} points!`;
            winningScreenBackground.style.display = 'block';
            winningScreen.style.display = 'flex';
            winningMessageDiv.textContent = `Congratulations! You've won!`;

            startGameButton.style.display = 'block'; // Show the start game button
            startGameButton.textContent = 'Start a New Game';
            
        } else {
            // Switch to the other player's turn
            currentPlayer = (currentPlayer + 1) % 2;
            messageDiv.textContent = `It's Player ${currentPlayer + 1}'s turn.`;

        }

        updateScores(); // Update the scores display
    }

    // Add event listeners to card buttons for picking cards
    cardButtons.forEach(button => {
        button.addEventListener('click', pickCard);
    });

    // Add event listener to start game button
    startGameButton.addEventListener('click', startGame);

    // Start the game for the first time
    startGame();

})();
