# On-Chain Wordle Game

Welcome to the On-Chain Wordle game! This game is fully decentralized and runs on the Ethereum blockchain. Players take turns guessing a 5-letter word, and the contract provides feedback on each guess, helping players refine their attempts.

## Features

- **Decentralized Gameplay**: The entire game is managed on the Ethereum blockchain using smart contracts.
- **Wallet Integration**: Players connect their MetaMask wallet to participate in the game.
- **Turn-based**: Players take turns guessing words, with feedback given after each guess.
- **Feedback System**:
  - **G** (Green): The letter is correct and in the right position.
  - **Y** (Yellow): The letter is correct but in the wrong position.
  - **B** (Black): The letter is not in the word.
- **No Repeated Words**: Players cannot guess the same word twice.
- **Game End**: The game ends when a player correctly guesses the secret word.
- **Transparency**: All game events and transactions are recorded on the blockchain.

## How It Works

1. **Connect Wallet**: Players connect their MetaMask wallet to the DApp.
2. **Game Start**: One player can set an initial secret word.
3. **Submit Guesses**: Players submit their guesses in turn. After each guess, feedback is provided.
4. **Game End**: The game ends when a player guesses the word correctly.

### Rules

- **Guess**: Each player submits a 5-letter word as their guess.
- **Feedback**: After each guess, players receive feedback in the form of colors (Green, Yellow, or Black).
- **Turns**: Players take turns submitting guesses in the correct order.
- **Ending the Game**: The game ends once the correct word is guessed.

## Gameplay Example

- **Secret Word**: `APPLE`
- **Guess**: `ALERT`
- **Feedback**: `GYBBG`

In this example:
- The first letter `A` is in the correct position (Green).
- The second letter `L` is in the wrong position (Yellow).
- The letters `E`, `R`, and `T` are not in the word at all (Black).

## Features on the Blockchain

- **Smart Contract**: The game logic, including feedback and validation of guesses, is executed on the blockchain.
- **Event Logging**: Every guess and result is logged on the blockchain.
- **Decentralization**: The game is fully decentralized and does not rely on a centralized server.

## How to Play

1. **Connect Wallet**: Connect your MetaMask wallet by clicking the "Connect Wallet" button.
2. **Join the Game**: Register your wallet address to join the game.
3. **Start the Game**: Once enough players have joined, the game can be started.
4. **Submit Guesses**: Players submit their guesses through the web interface. After each guess, feedback is provided to the player.
5. **Wait for Turn**: Only the player whose turn it is can submit a guess. The turn order is automatically managed by the smart contract.

## Interface Overview

- **Connect Wallet**: Button to connect your MetaMask wallet.
- **Guess Word Input**: Text input field to enter your guess.
- **Submit Guess**: Button to submit your word guess.
- **Feedback Display**: Area to display feedback after each guess (Green, Yellow, Black).
- **Player Registration**: Register your wallet to participate in the game.

## Smart Contract

The game logic is handled by a Solidity smart contract deployed on the Ethereum blockchain. Key functions include:

- `register()`: Registers a player to join the game.
- `startGame(string initialWord)`: Starts the game with a given secret word.
- `submitWord(string word)`: Allows a player to submit a word guess.
- `getPlayers()`: Returns the list of registered players.
- `gameStarted()`: Checks if the game has started.
- `lastWord()`: Gets the last word guessed.
- `currentPlayer()`: Gets the current player's address.

## Contributing

If you have ideas for improvements or want to contribute, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
