"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const randomColor = () => {
  const randomC1 = Math.trunc(Math.random() * 255);
  const randomC2 = Math.trunc(Math.random() * 255);
  const randomC3 = Math.trunc(Math.random() * 255);
  return `rgba(${randomC3},${randomC2},${randomC1})`;
};

const firstBar = {
  y: canvas.height - 100,
  width: 150,
  height: 10,
  x: canvas.width / 2 - 75,
  dy: 1,
};

const bar1 = {
  y: 100 - firstBar.height,
  width: 150,
  height: 10,
  x: 40,
  dx: 1,
  dy: 5,
  speed: 6,
};

const constBar = () => {
//   ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.fillRect(firstBar.x, firstBar.y, firstBar.width, firstBar.height);
  ctx.closePath();
  ctx.fill();
};

const drawBar = (bars) => {
  bars.forEach((bar) => {
    // ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  
};
const bars = [bar1];
let activeBar = bars.at(-1);
let prevBarY = firstBar.y;
let prevBar;
const moveBarInX = (activeBar) => {
  //   bars.forEach((bar) => {
  //     bar.x += bar.dx;
  //     bar.y = prevBarY - 10;
  //   });
  activeBar.x += activeBar.dx;
  activeBar.y = prevBarY - 10;
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  constBar();
  moveBarInX(activeBar);
  drawBar(bars);
  requestAnimationFrame(update);
};

update();

const enterKey = () => {
  activeBar.dx = 0;
  
  bars.push({
    y: activeBar.y + 10,
    width: 150,
    height: 10,
    x: 40,
    dx: 1,
    dy: 5,
    speed: 6,
  });
  activeBar = bars.at(-1);


  prevBarY = bars.at(-1).y - 10;
  ctx.fillStyle = randomColor();
};

window.addEventListener("keydown", function (e) {
  if (e.key === "enter" || e.key === "Enter") {
    enterKey();
    console.log("hey");
  }
});
