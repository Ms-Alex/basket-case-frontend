

let counter = 0


function createBeehive(){
  let randomNumber = Math.floor(Math.random() * 700) + 100;
  let beehiveId = counter
  const gameContainer = document.getElementById('container')


  const beehiveHTML = `<div class="beehive" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="https://png.icons8.com/cotton/2x/hornet-hive.png" width="80px" height="80px"> </div>`

  gameContainer.innerHTML += beehiveHTML

}


// setInterval(myMove, 1500);

function myMove() {
  createBeehive()

  let elem = document.getElementById(`beehive_${counter}`);

  // x position will equal dis
  let pos = 160;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 680) {
      clearInterval(id);
      elem.remove()
    } else {
      pos++;
      elem.style.top = pos + 'px';

    }
  }

}
