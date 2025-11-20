// Constants
const canvasEl = document.querySelector('#canvas');

const ctx = canvasEl.getContext('2d');

// Canvas styles and elements
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;

ctx.fillRect(5, 15, 100, 120);
ctx.strokeRect(5, 15, 100, 120);

ctx.moveTo(290, 100);
ctx.lineTo(290, 50);
ctx.stroke();

ctx.arc(165, 75, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();