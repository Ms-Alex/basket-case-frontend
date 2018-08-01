document.addEventListener('DOMContentLoaded', (event) => {

  usersIndex()
  scoresIndex()

  const usernameInput = document.getElementById('username-input')
  const loginForm = document.getElementById('login-form')


////////////////////

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const postBody = {
      username: usernameInput.value
    }

    loginUser(postBody).then(data => new User(data))

  })

  const basket = document.getElementById('medkit1')
  document.addEventListener('keydown', (event) => {

    // if keypress left
    if (event.keyCode == '37') {
      if ( basket.style.left !== "90px" ) {
        basket.style.left = parseInt(basket.style.left) - 5 + "px"
      }

    }
    // if keypress right
    if (event.keyCode == '39') {
      if ( basket.style.left !== "845px" ) {
        basket.style.left = parseInt(basket.style.left) + 5 + "px"
      }

    }
  })

  /////////////////

  // myMove()




  // myMove()


});
