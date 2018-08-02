let counterA = 0


function createApple() {
  counterA++
  let randomNumber = Math.floor(Math.random() * 700) + 100;
  let appleId = counterA
  const gameContainer = document.getElementById('container')

  if (gameContainer !== null) {
    const appleHTML = `<div id="apple_${counterA}" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="https://s3.amazonaws.com/jordan1/images/uploads/098b2c9f-4b27-4f9e-9305-317e2ca05c5b.png" width="40px" height="50px"> </div>`
    gameContainer.innerHTML += appleHTML
  }
};

function appleMove() {
  createApple()
  let myCounter = counterA
  let originalElement = document.getElementById(`apple_${myCounter}`);

  // x position will equal this
  let pos = 160;
  let id = setInterval(frame, 5);

  function frame() {
    let elemA = document.getElementById(`apple_${myCounter}`);
    //console.log(elem===originalElement)
    if (elemA !== null) {
      appleTouchedBasket(elemA, id)

      if (pos == 680) {
        clearInterval(id);
        elemA.remove()
      } else {
        pos++;
        elemA.style.top = pos + 'px';

      }
    }
  }
};

function setScore(userObj) {
  let scoreContainer = document.getElementById('score-container')

  let scoreText = `<h3>Score: ${userObj.score}</h3>`
  scoreContainer.innerHTML = scoreText
}

function appleTouchedBasket(elem, id) {

  if (elem !== null) {

    const basket = document.getElementById('basket')
    let user = storeUsers[0]

    if (590 <= parseInt(elem.style.top) &&
      parseInt(elem.style.top) <= 630 &&
      (parseInt(basket.style.left) - 30) <= parseInt(elem.style.left) &&
      parseInt(elem.style.left) <= (parseInt(basket.style.left) + 80)) {
      elem.remove()
      clearInterval(id)
      user.score += 10
      setScore(user)

    }
  }
}