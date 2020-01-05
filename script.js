/*These are but prliminary thoughts*/

//function createGrid 
    //init with 16x16
    //from user input
function createGrid(tiles){
    //create and append the rows
    for (let y=0; y < tiles;y++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        //Create and append columns
        for (let x=0; x < tiles; x++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

    }

}

//function color
    //draw with random colors

//function black
    //draw with black

//function grayscale
    //draw with 10% grayscale. 
    //darken on overlap

//function clearGrid
    //clear everything
    //keep colorselection



//Listening to the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(button.id);
    });
});

const container = document.getElementById('container');
createGrid(16);



