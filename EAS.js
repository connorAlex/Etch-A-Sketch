//set up a 16x16 grid of squares

const container = document.querySelector(".container");

//set default dimensions
let dim = 16;

//create rows
for (i = 0; i < dim; i ++){
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    //spacing must be relative to the dimensions

    //set up squares
    for (j = 0; j < dim; j ++){
        const square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
        square.style.padding = `${200 / dim}px`;
    }   
}

//add mouse click listener
let cont = document.querySelector(".container");
cont.addEventListener("mouseover", function(e) {
    console.log(e.target);
    if ( e.target.className === "square"){
        e.target.style.backgroundColor = "#6C9A8B";
    }
    
});