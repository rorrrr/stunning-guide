// var listener = new window.keypress.Listener();

var app = function(){

  var canvas = document.querySelector("#main-canvas")
  var context = canvas.getContext('2d');
  // context.fillStyle = "palegoldenrod";

  // context.fill('palegoldenrod');

  var x = 300;
  var y = 250;

  var shake = function(){

    console.log("hey")
    
    context.clearRect(0, 0, 600, 500)

    context.beginPath();
    x = 300;
    y = 250;
  }

  context.strokeStyle = "dodgerblue";
  context.beginPath();
  context.moveTo(x,y)
  // context.moveTo(300, 250);
  // context.lineTo(300, 250);
  // console.log()
  // context.closePath();
  // context.stroke();


  var upButton = document.getElementById('up-btn');
  var downButton = document.getElementById('down-btn');
  var rightButton = document.getElementById('right-btn');
  var leftButton = document.getElementById('left-btn');
  var shakeButton = document.getElementById('shake');

  shakeButton.onclick = shake;

  var stayInBoundary = function(){
    if (x <0) { x = 0}
      else if(x>600) {x = 600};

    if (y<0) {y = 0}
      else if(y>500) {y= 500};
  }
  

  var upButtonPressed = function(){
  context.strokeStyle = "dodgerblue";

    console.log(context);
    // context.beginPath();
    context.lineTo(x, y-=30);
    // context.lineTo(100, 100)
    // context.closePath();
    context.stroke();
    stayInBoundary();
  }

  upButton.onclick = upButtonPressed;

  var downButtonPressed = function(){
  context.strokeStyle = "red";

    console.log(context);
    // context.beginPath();
    context.lineTo(x, y+=30);
    // context.lineTo(100, 100)
    // context.closePath();
    context.stroke();
    stayInBoundary();

  }

  downButton.onclick = downButtonPressed;

  var rightButtonPressed = function(){
  context.strokeStyle = "green";

    console.log(context);
    // context.beginPath();
    context.lineTo(x+=30, y);
    // context.lineTo(100, 100)
    // context.closePath();
    context.stroke();
    stayInBoundary();

  }

  rightButton.onclick = rightButtonPressed;

  var leftButtonPressed = function(){
  context.strokeStyle = "orange";

    console.log(context);
    // context.beginPath();
    context.lineTo(x-=30, y);
    // context.lineTo(100, 100)
    // context.closePath();
    context.stroke();
    stayInBoundary();

  }

  leftButton.onclick = leftButtonPressed;



  // var checkKey = function(event){
  //   // event = event || window.event;
  //   console.log(event.keyCode)

  //   if (event.keyCode === '38') {
  //       moveUp(event.x, event.y)
  //   }
  //   else if (event.keyCode === '40') {
  //       moveDown(event.x, event.y)
  //   }
  //   else if (event.keyCode === '37') {
  //      moveLeft(event.x, event.y)
  //   }
  //   else if (event.keyCode === '39') {
  //      moveRight(event.x, event.y)
  //   }

  // }

  // var moveUp = function(x,y){
  //   context.beginPath();
  //   context.moveTo(x, y+100)
  //   context.stroke();
  // }

  // var moveDown = function(x,y){
  //   context.beginPath();
  //   context.moveTo(x, y-100);
  //   context.stroke();
  // }

  // var moveLeft = function(x,y){
  //   context.beginPath();
  //   context.moveTo(x-100,y)
  //   context.stroke();
  // }

  // var moveRight = function(x,y){
  //   context.beginPath();
  //   context.moveTo(x+100,y)
  //   context.stroke();
  // }


  // context.onkeydown = checkKey;
//   context.fillStyle = 'palegoldenrod';
//   context.fillRect(10, 10, 50, 50);
//   context.fillRect(10, 100, 50, 50);


  
//   context.beginPath();
//   context.moveTo(100, 100);
//   context.lineTo(100, 200);
//   context.stroke();


//   context.beginPath();
//   context.moveTo(200, 200);
//   context.lineTo(200, 300);
//   context.lineTo(100, 300);
//   context.closePath();
//   context.stroke();

//   context.beginPath();
//   context.moveTo(300, 300);
//   context.lineTo(300, 400);
//   context.lineTo(400, 400);
//   context.lineTo(400, 300);
//   context.closePath();
//   context.stroke();

//   context.strokeStyle = "orange";
//   context.beginPath();
//   context.arc(300, 150, 50, 0 , Math.PI * 2, true)
//   context.stroke();

//   var drawCircle = function(x,y){
//     context.beginPath();
//     context.arc(x, y, 50, 0, Math.PI*2, true);
//     context.stroke();
//   }


//   // img.onclick = drawKermit;

  
//   canvas.onmousedown = function(event){
//     // console.log('event', event)
//     // drawCircle(event.x, event.y)
//     // var img = document.createElement('img');
//     // img.src = "https://s-media-cache-ak0.pinimg.com/736x/6b/23/a0/6b23a0d0a78f55223e9c20ae33212a91.jpg";
//     drawKermit(event.x-50, event.y-50);

//   }

//   var img = document.createElement('img');
//   img.src = "http://24.media.tumblr.com/tumblr_mcfm8rVfe91qbxrgzo1_500.png";

//   var drawKermit = function(x,y) {
//     context.drawImage(img, x, y, 90, 90);
//   }

//   img.onclick = drawKermit;

//   // img.onload = drawKermit;

//   var changeColor = function(){
//     context.strokeStyle = this.value;
//   }

//   var colorPicker = document.querySelector('#input-color');
//   colorPicker.onchange = changeColor;
// }

}

window.onload = app;