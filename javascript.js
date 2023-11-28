document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Student', 'Newbie', 'Future Web Developer'], 
        typeSpeed: 60, 
        loop: true, 
    };

    var typed = new Typed('.text', options);
});





document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.sidenav a');
 
    links.forEach(link => {
       link.addEventListener('click', function (e) {
          e.preventDefault();
 
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
 
          if (targetElement) {
             targetElement.scrollIntoView({
                behavior: 'smooth'
             });
          }
       });
    });
 });
 

 var scoreX = 0;
  var scoreO = 0;
  var currentPlayer = 'X';
  var cells = document.querySelectorAll('.cell');
  
  function updateScore() {
    document.getElementById('playerX').textContent = 'Player X: ' + scoreX;
    document.getElementById('playerO').textContent = 'Player O: ' + scoreO;
  }

  function checkWinner() {
    const winCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (const combo of winCombos) {
      const [a, b, c] = combo;
      if (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
      ) {
        return combo; 
      }
    }
    return null; 
  }

  function isBoardFull() {
    return Array.from(cells).every(cell => cell.textContent);
  }

  function handleCellClick(cell) {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      const winnerCombo = checkWinner();
      if (winnerCombo) {
        highlightWinnerCells(winnerCombo);
        if (currentPlayer === 'X') {
          scoreX++;
        } else {
          scoreO++;
        }
        updateScore();
        setTimeout(resetGame, 1000); 
      } else if (isBoardFull()) {
        setTimeout(resetGame, 1000); 
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function highlightWinnerCells(combo) {
    for (const index of combo) {
      cells[index].style.backgroundColor = '#4CAF50'; 
    }
  }

  function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.style.backgroundColor = '#c0a080';
    });
  }




  let currentSlide = 0;

  function showSlide(index) {
    const container = document.querySelector('.home_image-container');
    const slides = document.querySelectorAll('.home_image-item');
    currentSlide = (index + slides.length) % slides.length;
    const translateValue = -currentSlide * 100 + '%';
    container.style.transform = 'translateX(' + translateValue + ')';
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }



  function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';

    const positionX = Math.random() * window.innerWidth;
    const positionY = -10;  
    const duration = Math.random() * 1.5 + 0.5; 

    raindrop.style.left = `${positionX}px`;
    raindrop.style.top = `${positionY}px`;  
    raindrop.style.animationDuration = `${duration}s`;

    document.body.appendChild(raindrop);

    raindrop.addEventListener('animationiteration', () => {
      raindrop.remove();
    });
  }

  function createRaindrops() {
    setInterval(createRaindrop, 100);
  }
  createRaindrops();

 
 var navLinks = document.querySelectorAll('#mySidenav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });