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

  /////////////////


  // createScore({"user_id": 1, "point_total": 540})

console.log("hi")


});
