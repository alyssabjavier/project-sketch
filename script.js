const container = document.getElementById('container');
const promptBtn = document.getElementById('promptBtn');
promptBtn.addEventListener('click', (event) => {
    const num = prompt('how large do u want ur grid, pls keep it under 1 hundo');
    const numSquare = num * num;

    for (let i = 0; i < numSquare; i++) {
        const squareDiv = document.createElement('div');
        calcSize = 500 / num;
        squareDiv.style.width = calcSize + 'px';
        squareDiv.style.height = calcSize + 'px';
        squareDiv.className = 'square';
        container.appendChild(squareDiv);
        
    //change background when mouse hovers
        squareDiv.addEventListener('mouseover', (event) => {
            squareDiv.style.backgroundColor = 'black';
        }
        );
    
    }
})