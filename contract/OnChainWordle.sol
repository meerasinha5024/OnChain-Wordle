// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract OnChainWordle {
    address public owner;
    string private secretWord; // 5-letter word
    uint256 public gameEndTime;

    mapping(address => uint256) public attempts;

    event GuessResult(address indexed player, uint256 attempt, string result);
    event GameEnded(string secretWord);

    constructor(string memory _secretWord, uint256 _gameDuration) {
        require(bytes(_secretWord).length == 5, "Word must be 5 letters");
        owner = msg.sender;
        secretWord = _secretWord;
        gameEndTime = block.timestamp + _gameDuration;
    }

    modifier onlyBeforeEnd() {
        require(block.timestamp <= gameEndTime, "Game has ended");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function guessWord(string memory guessedWord) public onlyBeforeEnd {
        require(bytes(guessedWord).length == 5, "Guess must be 5 letters");
        attempts[msg.sender] += 1;

        string memory feedback = evaluateGuess(guessedWord);

        emit GuessResult(msg.sender, attempts[msg.sender], feedback);
    }

    function evaluateGuess(string memory guessedWord)
        internal
        view
        returns (string memory)
    {
        bytes memory secret = bytes(secretWord);
        bytes memory guess = bytes(guessedWord);
        bytes memory feedback = new bytes(5);

        for (uint256 i = 0; i < 5; i++) {
            if (guess[i] == secret[i]) {
                feedback[i] = "G"; // Correct letter and position
            } else if (contains(secret, guess[i])) {
                feedback[i] = "Y"; // Correct letter, wrong position
            } else {
                feedback[i] = "B"; // Wrong letter
            }
        }

        return string(feedback);
    }

    function contains(bytes memory word, bytes1 letter)
        internal
        pure
        returns (bool)
    {
        for (uint256 i = 0; i < word.length; i++) {
            if (word[i] == letter) return true;
        }
        return false;
    }

    function endGame() public onlyOwner {
        emit GameEnded(secretWord);
    }
}
