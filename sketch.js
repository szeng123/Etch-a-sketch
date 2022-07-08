function grid(dimension) {
    const container = document.getElementById('grid');
    for (i = 0; i < dimension; i++) {
        //create new row elements for each iteration 'i' and give class/id to elements 
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        //append container with new child row elements
        container.appendChild(row);

        for (j = 0; j < dimension; j++) {
            //define new element to create columns to form 'grid/box/cells/square' appearance of divs
            let box = document.createElement('div');
            box.textContent = j;
            box.className = 'box';
            box.id = 'box' + j;
            //append box element to row elements
            row.appendChild(box);
        }
    }
}

grid(6);