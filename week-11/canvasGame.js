const canvas = document.getElementById(myGame);
const ctx = canvas.getContext('2d');

ctx.fillStyle = "teal";
ctx.strokeStyle = "darkorange";

ctx.beginPath();
ctx.arc(400, 300, 75, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
ctx.closePath();