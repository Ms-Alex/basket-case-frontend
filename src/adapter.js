const usersApiUrl = 'http://localhost:3000/api/v1/users'
const scoresApiUrl = 'http://localhost:3000/api/v1/scores'


// USER FETCHES
function usersIndex() {
  return fetch(usersApiUrl).then(resp => resp.json())
}

function loginUser(body) {
  const postConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  return fetch(usersApiUrl, postConfig).then(resp => resp.json()).then(data => {
    if (data.errors) {
      alert(data.errors)
      window.location.reload()
    } else {
      return data
    }
  })
}

// SCORE FETCHES
function scoresIndex() {
  return fetch(scoresApiUrl).then(resp => resp.json())
}

function createScore(body) {
  const postConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  return fetch(scoresApiUrl, postConfig).then(resp => resp.json())
}
