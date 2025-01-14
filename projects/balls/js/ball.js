const ballpit = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight - document.getElementById("navbar").offsetHeight,
  left: document.getElementById("ballpit").offsetLeft,
  top: document.getElementById("navbar").offsetHeight
};
// Array of Balls
let balls = [];
let ballCap = 125;
let bcollision = false;

// Create a random color - https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}
// Create a random XY coord
function randomPOS(){
  return {
    x: Math.floor(Math.random() * ballpit.width),
    y: Math.floor(Math.random() * ballpit.height),
  }
}
// Ball Objects - a ball is an x position, y position, velocity, color, size, and ElementID
function createBall(){
  let startXY = randomPOS();
  balls.push({
    id: balls.length + 1,
    x: Math.abs(startXY.x - ballpit.width),
    y: Math.abs(startXY.y + ballpit.top),
    color: randomColor(),
    //size: (Math.floor(Math.random() * 5) + 1) * 10,
    size: 30,
    width: 30,
    height: 30,
    velocity: {
      x: Math.floor(Math.random() * 4) + 1,
      y: Math.floor(Math.random() * 4) + 1
    }
  });
  return balls[balls.length - 1];
}
// Update Ball Stats
function updateBallStats(){
  document.getElementById("ballTotal").textContent = balls.length;
}
// Collided
function collided(ball){
  balls.forEach((b) => {
    if(b.id !== ball.id && detectCollision(ball, b)){
      ball.velocity.x *= -1;
      ball.velocity.y *= -1;
    }
  });
}

// Update Position
function updatePosition(ball){
  if (bcollision) collided(ball);
  if (ball.x + ball.velocity.x > ballpit.width || ball.x + ball.velocity.x < ballpit.left ){
    ball.velocity.x *= -1;
   // ball.size = (Math.floor(Math.random() * 7) + 1) * 10;
    ball.color = randomColor();
  }
  if (ball.y + ball.velocity.y > ballpit.height || ball.y + ball.velocity.y < ballpit.top){
    ball.velocity.y *= -1;
   // ball.size = (Math.floor(Math.random() * 7) + 1) * 10;
    ball.color = randomColor();
  }
  ball.y += ball.velocity.y;
  ball.x += ball.velocity.x;
  updateBall(ball);
}

// Update all Balls
function updateAllPOS(){
  balls.forEach((ball) => {
    updatePosition(ball);
  });
}
// Add ball to ballpit
function addBall () {
  if (balls.length < ballCap){
    let ball = createBall();
    let newBall = document.createElement("div");
    newBall.id = "ball_"+ ball.id;
    newBall.style.zIndex = 5;
    newBall.style.position = "absolute";
    newBall.style.left = ball.x + "px";
    newBall.style.top = ball.y + "px";
    newBall.style.width = ball.size + "px";
    newBall.style.height = ball.size + "px";
    newBall.style.borderRadius = "50%";
    newBall.style.background = "#" + ball.color;
    document.getElementById("ballpit").append(newBall);
    updateBallStats();
  }
}
// Update Ball
function updateBall(ball){
  let ballDiv = document.getElementById("ball_" + ball.id);
  ballDiv.style.left = ball.x + "px";
  ballDiv.style.top = ball.y + "px";
  ballDiv.style.width = ball.size + "px";
  ballDiv.style.height = ball.size + "px";
  ballDiv.style.background = "#" + ball.color;
}
//Function Reset
function reset(){
  balls = [];
  document.getElementById("ballpit").innerHTML = '';
}
function collisionDemo(){
  bcollision = !bcollision;
  if (bcollision){
    document.getElementById("collision").textContent = "Remove";
    ballCap = 10;
  }
  else{
    document.getElementById("collision").textContent = "Add";
    ballCap = 125;
  }
  reset();
}
function sizeBallpit(){
  let pit = document.getElementById("ballpit");
  newBall.style.top = ballpit.top + "px";
  newBall.style.width = ballpit.width+ "px";
  newBall.style.height = ball.height + "px";

}
setInterval(addBall, 1000)
setInterval(updateAllPOS, 22)