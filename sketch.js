const container = document.getElementById('grid-space');

function grid(dimension) {
    //Create CSS variables to overwrite old value in CSS files (2) 
    container.style.setProperty('--grid-rows', dimension);
    container.style.setProperty('--grid-columns', dimension);

    //Generate X number of grids
    for (i = 0; i < (dimension * dimension); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell);
        cell.classList.add("grid-item");
    };
};

function initialGrid() {
    grid(16);
}

// New grid button
let reset = document.getElementById('reset');

function newGridSize() {
    while (true) {
        let size = prompt('Please enter the new size of the grid (1-100).');
        if ((typeof size == null)||(typeof size !== 'number')) {
            console.log('Please enter a number! ');
        } else if ((size < 1) || (size > 100)) {
            console.log('Please enter a valid number! ');
        } else {
            console.log('valid');
            break;
        }
        }

}

reset.addEventListener('click', newGridSize);


initialGrid();




//Change grid colors 
let gridArray = document.getElementsByClassName('grid-item');

let changeColor = function() {
    event.target.classList.add('color');
};

for (k = 0; k < gridArray.length; k++) {
    gridArray[k].addEventListener('mouseover', changeColor, false);
}