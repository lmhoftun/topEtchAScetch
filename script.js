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
//Listening to the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(button.id);
        switch (button.id){
            case "btnClear":
                //Clear the grid
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                //prompt for new grid size
                let tiles = parseInt(prompt("input new resolution", 16), 10);
                console.log(tiles);
                createGrid(tiles);
            break;
            default:
                prompt("Tullball");//sorry 'bout the gibberish
                break;

        }
        //btnClear
        //btbBlack
        //btnColor
        //btnDarken

    });
});

const container = document.getElementById('container');
createGrid(16);



