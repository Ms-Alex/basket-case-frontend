const startBees = setInterval(beeMove, 2000);
const startApples = setInterval(appleMove, 2300);

function finish(){
  clearInterval(startBees)
  clearInterval(startApples)
}
