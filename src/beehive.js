// document.addEventListener('DOMContentLoaded',function(event) {


  let counter = 0


  function createBeehive(){
    counter++
    let randomNumber = Math.floor(Math.random() * 700) + 100;
    let beehiveId = counter
    const gameContainer = document.getElementById('container')
    // const body = document.getElementsByTagName('body')[0]


    const beehiveHTML = `<div id="beehive_${counter}" style="left: ${randomNumber}px; top: 175px; position: absolute"> <img src="https://png.icons8.com/cotton/2x/hornet-hive.png" width="80px" height="80px"> </div>`
    gameContainer.innerHTML += beehiveHTML
    // body.innerHTML += beehiveHTML

  }


  // setInterval(myMove, 2000);

  function myMove() {
    createBeehive()
    let myCounter = counter
    let originalElement = document.getElementById(`beehive_${myCounter}`);

    // x position will equal this
    let pos = 160;
    let id = setInterval(frame, 5);
    function frame() {
      let elem = document.getElementById(`beehive_${myCounter}`);
      //console.log(elem===originalElement)
      if (pos == 680) {
        clearInterval(id);
        elem.remove()
      } else {
        pos++;
        elem.style.top = pos + 'px';

      }
    }
  }


  // function touchesBasket?(elem){
  //   if (elem.style.left === basket.style.left && ) {
  //
  //   }
  // }

// })
