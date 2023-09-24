document.addEventListener("DOMContentLoaded", function () {
    // Get the player ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get("id");

    const players = [
        {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "All-rounder"
        },
        {
        "id": 1,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman"
        },
        {
        "id": 2,
        "playerName": "Yuvraj Singh",
        "from": "MI",
        "price": "1.00 Cr",
        "isPlaying": false,
        
        "description": "Batsman"
        },
        {
        "id": 3,
        "playerName": "Chris Morris",
        "from": "RR",
        "price": "16.25 Cr",
        "isPlaying": true,
        "description": "All-rounder"
        },
        {
        "id": 4,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "14.25",
        "isPlaying": true,
        "description": "All-rounder"
        },
        {
        "id": 5,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        },
        {
        "id": 6,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        }
        ,
        {
        "id": 7,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        }
        ,
        {
        "id": 8,
        "playerName": "Siraj",
        "from": "RCB",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        }
        ,
        {
        "id": 9,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "BatsMan"
        }
        
    ];

    // Find the player based on the ID
    const player = players.find((p) => p.id === parseInt(playerId, 10));

    // Display the player's name on the player details page
    if (player) {

         document.getElementById('kicha').src = `./${player.id}.jpg`;
        document.getElementById("player-name").textContent = "Name: " + player.playerName;
        document.getElementById("player-from").textContent = "from: " + player.from;
        document.getElementById("player-price").textContent = "price: " + player.price;
        const statusElement = document.getElementById("player-isPlaying");
    if (player.isPlaying) {
        statusElement.textContent = "Status: Playing";
    } else {
        statusElement.textContent = "Status: On Bench";
    }
        
        document.getElementById("player-description").textContent = "Role: " + player.description;
    // } else {
    //     // Player not found, display an error message
    //     document.getElementById("player-name").textContent = "Player not found.";
    }
});
