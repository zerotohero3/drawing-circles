const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    context.beginPath();
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    context.beginPath();
    context.arc(mouseX, mouseY, 35, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.fillStyle = 'black'; 
    context.lineWidth = 1;
    context.fill();
    context.stroke();
});