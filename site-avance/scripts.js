// Gestion des onglets
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }
  
  // Calculatrice
  let calcDisplay = document.getElementById('calc-display');
  let calcCurrentInput = '';
  
  function appendToCalc(value) {
    calcCurrentInput += value;
    calcDisplay.value = calcCurrentInput;
  }
  
  function calculate() {
    try {
      calcDisplay.value = eval(calcCurrentInput);
      calcCurrentInput = calcDisplay.value;
    } catch {
      calcDisplay.value = 'Erreur';
    }
  }
  
  function clearCalc() {
    calcCurrentInput = '';
    calcDisplay.value = '';
  }
  
  // Tic-Tac-Toe
  let currentPlayer = 'X';
  
  function makeMove(cell) {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        setTimeout(() => alert(currentPlayer + ' gagne!'), 10);
        setTimeout(() => resetGame(), 1000);
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombination = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    return winningCombination.some(combination => {
      const [a, b, c] = combination;
      return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
  }
  
  function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
  }
  