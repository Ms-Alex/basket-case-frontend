let counterA = 0


function createApple(){
  counterA++
  let randomNumber = Math.floor(Math.random() * 700) + 100;
  let appleId = counterA
  const gameContainer = document.getElementById('container')

  const appleHTML = `<div id="apple_${counterA}" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="https://s3.amazonaws.com/jordan1/images/uploads/098b2c9f-4b27-4f9e-9305-317e2ca05c5b.png" width="40px" height="50px"> </div>`
  gameContainer.innerHTML += appleHTML
};

function appleMove() {
  createApple()
  let myCounter = counterA
  let originalElement = document.getElementById(`apple_${myCounter}`);

  // x position will equal this
  let pos = 160;
  let id = setInterval(frame, 5);
  function frame() {
    let elem = document.getElementById(`apple_${myCounter}`);
    //console.log(elem===originalElement)
    if (pos == 680) {
      clearInterval(id);
      elem.remove()
    } else {
      pos++;
      elem.style.top = pos + 'px';

    }
  }
};
