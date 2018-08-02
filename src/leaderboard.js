function leaderBoardHTML(scoreObjs) {

  const leaderContainer = document.getElementById('leaderboard')

  const sortedTopTen = scoreObjs.sort((a, b) => b.point_total - a.point_total).splice(0, 10)

  const leaderboardHTML = sortedTopTen.map(scoreObj => {
    return `
        <tr>
        <td>${scoreObj.user.username}</td> <td>${scoreObj.point_total}</td>
        </tr>
      `
  }).join("")

  leaderContainer.innerHTML = `
                      <h2>Leaderboard</h2>
                        <table>
                          <tr>
                            <th>Username</th>
                            <th>Score</th>
                          </tr>
                          ${leaderboardHTML}
                        </table>
                        `
}