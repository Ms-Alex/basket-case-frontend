document.addEventListener('DOMContentLoaded', (event) => {

  usersIndex()
  scoresIndex().then(leaderBoardHTML)


  const usernameInput = document.getElementById('username-input')
  const loginForm = document.getElementById('login-form')
  const directions = document.getElementById('game-directions')
  let scoreContainer = document.getElementById('score-container')

  ////////////////////

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const postBody = {
      username: usernameInput.value
    }

    loginUser(postBody).then(data => new User(data)).then(setScore)

    loginForm.remove()
    directions.remove()

    setInitialLives()

    startGame()

  });


  const basket = document.getElementById('basket')

  document.addEventListener('keydown', (event) => {

    // if keypress left
    if (event.keyCode == '37') {
      if (basket.style.left !== "100px") {
        basket.style.left = parseInt(basket.style.left) - 5 + "px"
      }

    }
    // if keypress right
    if (event.keyCode == '39') {
      if (basket.style.left !== "800px") {
        basket.style.left = parseInt(basket.style.left) + 5 + "px"
      }

    }
  });



  /////////////////

  function setInitialLives() {
    const heartsContainer = document.getElementById('hearts-container')

    let first_heart = `
      <div class="health" id="heart_1" style="top: 175px; position: absolute; left: 115px"> <img src="./assets/Medkit.png" width="75px" height="50px"> </div>
    `;

    let sec_heart = `
      <div class="health" id="heart_2" style="top: 175px; position: absolute; left: 195px"> <img src="./assets/Medkit.png" width="75px" height="50px"> </div>
    `;

    let third_heart = `
      <div class="health" id="heart_3" style="top: 175px; position: absolute; left: 275px"> <img src="./assets/Medkit.png" width="75px" height="50px"> </div>
    `;

    heartsContainer.innerHTML = first_heart + sec_heart + third_heart
  }


  function setScore(userObj) {
    let scoreText = `<h3>Score: ${userObj.score}</h3>`
    scoreContainer.innerHTML = scoreText
  }


});
