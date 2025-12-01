const board = document.querySelector('.board');
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

const highScoreElement = document.querySelector('#high-score');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');

const blockHeight = 30;
const blockWidth = 30;

// High Score Fix
let highScore = Number(localStorage.getItem("highScore")) || 0;
let score = 0;
let time = `00-00`;

highScoreElement.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timerIntervalID = null;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols)
};

const blocks = {};

// Build Grid
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);

    blocks[`${row}-${col}`] = block;
  }
}

// Snake starting pos
let snake = [
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 }
];

let direction = 'down';

function render() {

  // add food
  blocks[`${food.x}-${food.y}`].classList.add("food");

  // Calculate new head
  let head = { ...snake[0] };

  if (direction === "left") head.y--;
  else if (direction === "right") head.y++;
  else if (direction === "down") head.x++;
  else if (direction === "up") head.x--;

  // Wall Collision
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    clearInterval(timerIntervalID);

    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";
    return;
  }

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols)
    };

    score += 10;
    scoreElement.innerText = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreElement.innerText = highScore;
    }

    snake.unshift(head);

  } else {
    // Remove old body
    snake.forEach(seg => {
      blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();
  }

  // Draw snake
  snake.forEach(seg => {
    blocks[`${seg.x}-${seg.y}`].classList.add("fill");
  });
}

// Controls
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") direction = "up";
  if (event.key === "ArrowDown" && direction !== "up") direction = "down";
  if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
  if (event.key === "ArrowRight" && direction !== "left") direction = "right";
});

// Start Game
startButton.addEventListener("click", () => {
  modal.style.display = "none";

  intervalId = setInterval(render, 300);

  timerIntervalID = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);

    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }

    time = `${String(min).padStart(2, '0')}-${String(sec).padStart(2, '0')}`;
    timeElement.innerText = time;

  }, 1000);
});

// Restart Game
restartButton.addEventListener("click", restartGame);

function restartGame() {

  blocks[`${food.x}-${food.y}`].classList.remove("food");

  score = 0;
  time = `00-00`;

  scoreElement.innerText = score;
  timeElement.innerText = time;
  highScoreElement.innerText = highScore;

  snake.forEach(seg => {
    blocks[`${seg.x}-${seg.y}`].classList.remove("fill");
  });

  direction = "down";
  snake = [
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 1, y: 5 }
  ];

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols)
  };

  modal.style.display = "none";

  intervalId = setInterval(render, 300);
}
