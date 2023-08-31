const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    draw(event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault();
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

function draw(x, y) {
    if (!isDrawing) return;

    const isMobile = window.innerWidth <= 768;

    const radius = isMobile ? 15 : 35;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.fillStyle = 'black';
    context.lineWidth = 1;
    context.fill();
    context.stroke();
}

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', (event) => {
    draw(event.touches[0].clientX, event.touches[0].clientY);
});
canvas.addEventListener('touchend', stopDrawing);

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});
canvas.addEventListener('mousemove', (event) => {
    draw(event.clientX, event.clientY);
});
canvas.addEventListener('mouseup', stopDrawing);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
