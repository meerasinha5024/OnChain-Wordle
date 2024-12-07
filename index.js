const contractAddress = "0x6834fa556f198c6F075D28b5FA9Ee5531dB8aD9D";
        const abi = [
            {
                "inputs": [],
                "name": "endGame",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_secretWord",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_gameDuration",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "secretWord",
                        "type": "string"
                    }
                ],
                "name": "GameEnded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "player",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "attempt",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "result",
                        "type": "string"
                    }
                ],
                "name": "GuessResult",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "guessedWord",
                        "type": "string"
                    }
                ],
                "name": "guessWord",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "attempts",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "gameEndTime",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        let signer;
        let contract;
        let currentFeedback = [];  // Store the feedback for all guesses
        
        // Connect Wallet
        async function connectWallet() {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                signer = provider.getSigner();
                const walletAddress = await signer.getAddress();
                document.getElementById("walletStatus").innerText = `Connected: ${walletAddress}`;
                document.getElementById("submitGuess").disabled = false;
                document.getElementById("showFeedback").disabled = false; // Enable "Show Feedback" button
        
                // Initialize Contract
                contract = new ethers.Contract(contractAddress, abi, signer);
        
                // Listen for GuessResult event
                contract.on("GuessResult", (player, attempt, result) => {
                    signer.getAddress().then((address) => {
                        if (player.toLowerCase() === address.toLowerCase()) {
                            const feedbackDiv = document.getElementById("feedback");
                            const feedbackMessage = `Attempt ${attempt}: ${result}`;
                            currentFeedback.push(feedbackMessage);  // Store feedback
                            feedbackDiv.innerHTML += `<p>${feedbackMessage}</p>`; // Immediately update UI
                            if (result === "GGGGG") {
                                setTimeout(() => {
                                    alert("Congratulations, you have won!");
                                }, 500); // Delay the congratulatory message to ensure the feedback is displayed
                            }
                        }
                    });
                });
            } else {
                alert("Please install MetaMask to connect!");
            }
        }
        
        // Submit Guess
        async function guessWord() {
            const guess = document.getElementById("guess").value.toUpperCase();
            if (guess.length !== 5) {
                alert("Your guess must be exactly 5 letters!");
                return;
            }
        
            try {
                const tx = await contract.guessWord(guess);
                const receipt = await tx.wait(); // Wait for transaction confirmation
                console.log("Transaction confirmed:", receipt);
                // Don't need to manually call the event listener anymore; it will trigger on its own
            } catch (err) {
                console.error(err);
                alert("Error submitting guess. Please try again.");
            }
        }
        
        // Show Feedback
        function showFeedback() {
            if (currentFeedback.length === 0) {
                alert("No feedback available yet. Please submit a guess.");
                return;
            }
        
            const feedbackDiv = document.getElementById("feedback");
            feedbackDiv.innerHTML = ""; // Clear existing feedback
            currentFeedback.forEach(feedbackMessage => {
                feedbackDiv.innerHTML += `<p>${feedbackMessage}</p>`;
            });
        }
        
        // Attach Event Listeners
        document.getElementById("connectWallet").onclick = connectWallet;
        document.getElementById("submitGuess").onclick = guessWord;
        document.getElementById("showFeedback").onclick = showFeedback;