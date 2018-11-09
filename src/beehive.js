let counterB = 0
let beeInterval
let appleInterval

function startGame() {
  beeInterval = setInterval(beeMove, 1000)
  appleInterval = setInterval(appleMove, 1500);
}

function endGame() {
  clearInterval(beeInterval)
  clearInterval(appleInterval)

}


function createBeehive() {
  counterB++
  let randomNumber = Math.floor(Math.random() * 700) + 100;
  let beehiveId = counterB
  const gameContainer = document.getElementById('container')

  if (gameContainer !== null) {
    const beehiveHTML = `<div id="beehive_${counterB}" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="./assets/hornet-hive.png" width="80px" height="80px"> </div>`
    gameContainer.innerHTML += beehiveHTML
  }
}

function beeMove() {
  createBeehive()
  let myCounter = counterB
  let originalElement = document.getElementById(`beehive_${myCounter}`);

  // x position will equal this
  let pos = 175;
  let id = setInterval(frame, 5);

  function frame() {
    let elemB = document.getElementById(`beehive_${myCounter}`);

    if (elemB !== null) {

      touchedBasket(elemB, id)

      if (pos == 680) {
        clearInterval(id);
        elemB.remove()
      } else {
        pos++;
        elemB.style.top = pos + 'px';
      }
    }
  }
};


const healthClass = document.getElementsByClassName('health')

function touchedBasket(elem, id) {

  if (elem !== null) {
    const basket = document.getElementById('basket')

    if (610 <= parseInt(elem.style.top) &&
      parseInt(elem.style.top) <= 670 &&
      (parseInt(basket.style.left) - 80) <= parseInt(elem.style.left) &&
      parseInt(elem.style.left) <= (parseInt(basket.style.left) + 100)) {

      elem.remove()
      healthClass[healthClass.length - 1].remove()
      clearInterval(id)

      if (healthClass.length === 0) {
        endGame()
        let user = storeUsers[0]

        createScore({
          point_total: user.score,
          user_id: user.id
        }).then(scoresIndex).then(leaderBoardHTML)

        const endGameHTML = `
              <div style="left: 250px; top: 155px; position: absolute; text-align: center;" width="500" height="600">
                <h1 style="color: white;">Game Over!<h1> 
                <h2 style="color: white;">Final Score: ${user.score}</h2> 
                <button id="play-again" class="btn btn-success" onclick="playAgain()" data-action="play-again">Play Again!</button>
                <br> 
                <img src="./assets/buzz3.png" height="350px" width="500px">
              </div>`;
        document.getElementById('game-board').innerHTML = endGameHTML
      }
    }

  }
};

function playAgain(){
  const gameBoard = document.getElementById('game-board')

  gameBoard.addEventListener('click', (event) => {
    if (event.target.dataset.action === "play-again") {
    window.location.reload()
    }
  });
}
