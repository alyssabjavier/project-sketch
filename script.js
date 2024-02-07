const container = document.getElementById('container');
const numSquare = 256;
for (let i = 0; i < numSquare; i++) {
    const squareDiv = document.createElement('div');
   // squareDiv.textContent = 's';
    squareDiv.className = 'square';
    container.appendChild(squareDiv);
}