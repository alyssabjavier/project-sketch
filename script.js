const container = document.getElementById('container');
const numSquare = 256;
for (let i = 0; i < numSquare; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    container.appendChild(squareDiv);
    
//change background when mouse hovers
    squareDiv.addEventListener('mouseover', (event) => {
        squareDiv.style.backgroundColor = 'black';
    }
    );

}