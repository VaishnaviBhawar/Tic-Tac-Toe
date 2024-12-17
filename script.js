let currentPlayer = 'Player 1';
    let gameBoard = Array(9).fill(null);

    const xImage = 'x.png';
    const oImage = 'o.png';

    function makeMove(index) {
      const cell = document.querySelectorAll('.cell')[index];
      if (gameBoard[index] !== null) return;
      if (currentPlayer === 'Player 1') {
        gameBoard[index] = 'X';
        cell.innerHTML = `<img src="${xImage}" alt="X" />`;
        currentPlayer = 'Player 2';
      } else {
        gameBoard[index] = 'O';
        cell.innerHTML = `<img src="${oImage}" alt="O" />`;
        currentPlayer = 'Player 1';
      }
      document.getElementById('current-player').textContent = `Current Player: ${currentPlayer}`;
      checkWinner();
    }

    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (
          gameBoard[a] &&
          gameBoard[a] === gameBoard[b] &&
          gameBoard[a] === gameBoard[c]
        ) {
          setTimeout(() => {
            const winnerImage = gameBoard[a] === 'X' ? xImage : oImage;
            alert(`${gameBoard[a]} wins!`);
            document.querySelectorAll('.cell')[a].innerHTML = `<img src="${winnerImage}" alt="${gameBoard[a]}" />`;
            resetGame();
          }, 100);
          return;
        }
      }
      if (gameBoard.every(cell => cell !== null)) {
        setTimeout(() => alert('It\'s a draw!'), 100);
        resetGame();
      }
    }

    function resetGame() {
      gameBoard.fill(null);
      document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
      currentPlayer = 'Player 1';
      document.getElementById('current-player').textContent = `Current Player: ${currentPlayer}`;
    }
  