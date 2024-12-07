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

### Contract Details

- **Contract Address**: `0x6834fa556f198c6F075D28b5FA9Ee5531dB8aD9D`
- **Sender Address**: `0x59c81c0E48185B193BbEDc684457acdE136E9823`
- **Network**: Mantle Sepolia Testnet

### Deployment

- **Transaction Hash**: [Link](https://sepolia.mantlescan.xyz/address/0x6834fa556f198c6F075D28b5FA9Ee5531dB8aD9D)
- **Coin Used**: MNT

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

## Smart Contract

The game logic is handled by a Solidity smart contract deployed on the Ethereum blockchain. Key functions include:

- `register()`: Registers a player to join the game.
- `startGame(string initialWord)`: Starts the game with a given secret word.
- `submitWord(string word)`: Allows a player to submit a word guess.
- `getPlayers()`: Returns the list of registered players.
- `gameStarted()`: Checks if the game has started.
- `lastWord()`: Gets the last word guessed.
- `currentPlayer()`: Gets the current player's address.

## IMAGES
<img width="1438" alt="Screenshot 2024-12-07 at 10 54 59 PM" src="https://github.com/user-attachments/assets/54aa6f36-3650-4bfd-a33c-4dc51727726d">

<img width="1438" alt="Screenshot 2024-12-07 at 10 55 30 PM" src="https://github.com/user-attachments/assets/a4e5fb00-c52c-4329-bf7e-1d914fd9b7ec">

