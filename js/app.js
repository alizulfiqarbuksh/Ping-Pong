// Constants ---------------------------------------------------------
const canvasEl = document.querySelector('#canvas');

const ctx = canvasEl.getContext('2d');

ctx.fillStyle = 'white';


// variables ---------------------------------------------------------
const ball = {
  positionX: 300, 
  positionY: 200,
  speedX: 4,   
  speedY: 4,
  size: 8,
};

const p1Paddle = {
  positionX: 20,
  positionY: 150,
  width: 15,
  height: 80,
  speed: 6,
};

const p2Paddle = {
  positionX: 565,
  positionY: 150,
  width: 15,
  height: 80,
  speed: 6,
};

let p1UpPressed = false;
let p1DownPressed = false;
let p2UpPressed = false;
let p2DownPressed = false;

let maxDown = canvasEl.height - p1Paddle.height;

// Functions ---------------------------------------------------------
function createBall () {
  ctx.beginPath();
  ctx.arc(ball.positionX, ball.positionY, ball.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
};

function createPaddle (paddle) {
  ctx.fillRect(paddle.positionX, paddle.positionY, paddle.width, paddle.height);
};

function clearCanvas () {
      ctx.clearRect(0, 0, 600, 400);
};

function paddleMovement () {
  if (p1UpPressed === true) {
    p1Paddle.positionY -= p1Paddle.speed;
    if (p1Paddle.positionY < 0) {
      p1Paddle.positionY = 0;
    }
  }
  if (p1DownPressed === true) {
    p1Paddle.positionY += p1Paddle.speed;
    if (p1Paddle.positionY > maxDown) {
      p1Paddle.positionY = maxDown;
    }
  }
  if (p2UpPressed === true) {
    p2Paddle.positionY -= p2Paddle.speed;
    if (p2Paddle.positionY < 0) {
      p2Paddle.positionY = 0;
    }
  }
  if (p2DownPressed === true) {
    p2Paddle.positionY += p2Paddle.speed;
    if (p2Paddle.positionY > maxDown) {
      p2Paddle.positionY = maxDown;
    }
  }
};

function displayElements () {
  paddleMovement();
  clearCanvas();
  createBall();
  createPaddle(p1Paddle);
  createPaddle(p2Paddle); 
  requestAnimationFrame(displayElements);
};

displayElements();

// Events ---------------------------------------------------------
document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }

  if (event.key === "w") {
    p1UpPressed = true;
  }
  else if (event.key === "s") {
    p1DownPressed = true;
  }
  else if (event.key === "ArrowUp") {
    p2UpPressed = true;
  }
  else if (event.key === "ArrowDown") {
    p2DownPressed = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === "w") {
    p1UpPressed = false;
  }
  else if (event.key === "s") {
    p1DownPressed = false;
  }
  else if (event.key === "ArrowUp") {
    p2UpPressed = false;
  }
  else if (event.key === "ArrowDown") {
    p2DownPressed = false;
  }
});