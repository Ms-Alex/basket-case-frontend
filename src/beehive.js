
  let counterB = 0


  function createBeehive(){
    counterB++
    let randomNumber = Math.floor(Math.random() * 700) + 100;
    let beehiveId = counterB
    const gameContainer = document.getElementById('container')

    const beehiveHTML = `<div id="beehive_${counterB}" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="https://png.icons8.com/cotton/2x/hornet-hive.png" width="80px" height="80px"> </div>`
    gameContainer.innerHTML += beehiveHTML
  };

  function beeMove() {
    createBeehive()
    let myCounter = counterB
    let originalElement = document.getElementById(`beehive_${myCounter}`);


    // x position will equal this
    let pos = 175;
    let id = setInterval(frame, 5);
    function frame() {
      let elem = document.getElementById(`beehive_${myCounter}`);
      //console.log(elem===originalElement)
      // setInterval(touchedBasket(elem), 100)
      touchedBasket(elem)

      if (pos == 680) {
        clearInterval(id);
        elem.remove()
      } else {
        pos++;
        elem.style.top = pos + 'px';

      }
    }
  };


  const healthClass = document.getElementsByClassName('health')

  function touchedBasket(elem){
    const basket = document.getElementById('basket')

    if ( ( (parseInt(basket.style.left) - 40) <= parseInt(elem.style.left) <= (parseInt(basket.style.left) + 40) ) && (610 <= parseInt(elem.style.top) <= 630) ) {

      healthClass[healthClass.length - 1].remove()
    }
  }
