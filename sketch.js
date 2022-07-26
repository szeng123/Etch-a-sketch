const container = document.getElementById('grid-space');
let chosenColor = 0;

function grid(dimension) {
    //Create CSS variables to overwrite old value in CSS files (2) 
    container.style.setProperty('--grid-rows', dimension);
    container.style.setProperty('--grid-columns', dimension);

    //Generate X number of grids
    for (i = 0; i < (dimension * dimension); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        container.appendChild(cell);
        cell.classList.add("grid-item");
    };
};

function initialGrid() {
    grid(16);
    changeColor();
}

// New grid button
let reset = document.getElementById('reset');

function newGridSize() {
    while (true) {
        let size = prompt('Please enter the new size of the grid (1-100).');
            if (isNaN(size)) {
                console.log('Not a number!');
            } else if ((size === null)||(size === '0')){
                console.log('Entered nothing, 0 or cancelled');
                break;
            } else {
                size = parseInt(size);
                if ((size < 1)||(size > 100)) {
                    console.log('Please enter a valid number!');
                } else {
                    clearGrid();
                    grid(size);
                    changeColor();
                    break;
                };
            };
        };
};

function clearGrid() {
    document.querySelectorAll('.grid-item').forEach((e) => e.parentNode.removeChild(e));
};



initialGrid();

//buttons 
reset.addEventListener('click', function(){
    newGridSize();
});

let colorButton = document.getElementById('blue');
let rainbowButton = document.getElementById('rgb');
let greyButton = document.getElementById('grey-scale');

colorButton.addEventListener('click', function(){
    chosenColor = colorButton.innerText;
    console.log(chosenColor);
});

rainbowButton.addEventListener('click', function(){
    chosenColor = rainbowButton.innerText;
    console.log(chosenColor);
});

greyButton.addEventListener('click', function(){
    chosenColor = greyButton.innerText;
    console.log(chosenColor);
});


//Change grid colors 
function changeColor(){
    let gridArray = document.getElementsByClassName('grid-item');

    let addColor = function() {
        switch(chosenColor){
            case 'blue':
                event.target.classList.add('color');
                event.target.style.background = 'blue';
                break;
            case 'Rainbow':
                event.target.classList.add('rgb');
                event.target.style.background = randomRGB();
                break;
            case 'Grey Scale':
                event.target.classList.add('grey-scale');
                greyScale();
                break;
            default: 
                event.target.classList.add('color');
                event.target.style.background = 'blue';
        };
    };
    for (k = 0; k < gridArray.length; k++) {
        gridArray[k].addEventListener('mouseover', addColor, false);
    };
};

function randomRGB(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
};
 
function greyScale(){
    let targetCell = document.getElementById('grey-scale');
    targetCell.style.background = 'black';
    let currentOpacity = targetCell.style.opacity = 0.1;

    function increaseOpacity() {
        if (currentOpacity >= 0.1) {
        targetCell.style.opacity = currentOpacity + 0.1;
        currentOpacity += 0.1;
        };
    };
};