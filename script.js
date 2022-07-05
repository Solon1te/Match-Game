const cards = document.querySelectorAll('.memory-card');
const flipCounter = document.getElementById('counter');

let lockBoard = false;
let hasFlippedCard = false
let firstCard, secondCard;
let flips = 5

flipCounter.innerText = flips

function flipCard() {

    if (lockBoard || this === firstCard || flips === 0) return;
    

    this.classList.toggle('flip');

    

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true
        firstCard = this;

        return;
    } 
        //second click`
        secondCard = this;

        checkForMatch();
        
        
    }


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === 
        secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards()
    
    
    flips --
    flipCounter.innerText = flips

    if (flips === 0 ) {
        flipCounter.innerText = 'You Lose!'
    }
    
          
    } 

  function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)   
    
    resetBoard();
  }

  function unflipCards() {
      lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip'); 
        secondCard.classList.remove('flip'); 

         resetBoard();
    }, 1500 );

  }



  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];  
  }


  (function shuffle() {
      cards.forEach(card => {
          let randomPos =Math.floor(Math.random() * 8)
          card.style.order = randomPos

      })
  })();


cards.forEach(card => card.addEventListener('click', flipCard)) 