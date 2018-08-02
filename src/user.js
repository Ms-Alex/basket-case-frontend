const storeUsers = []

class User {
  constructor(userObj) {
    this.id = userObj.id
    this.username = userObj.username
    this.lives = 3
    this.score = 0
    storeUsers.push(this)
  }


}