//set up a 16x16 grid of squares

const container = document.querySelector(".container");

//get slider value
let range = document.querySelector(".slider");
let label = document.querySelector(".label");
label.innerHTML = range.value;
let mydim = range.value;
setDimensions(mydim);

range.oninput  = function () {
    label.innerHTML = this.value;
    mydim = this.value;
    while (container.firstChild) { 
        container.removeChild(container.firstChild);
    }
    setDimensions(mydim);
}




//add mouse click listener
let cont = document.querySelector(".container");
cont.addEventListener("mouseover", function(e) {
    
    if ( e.target.className === "square"){
        e.target.style.backgroundColor = "#6C9A8B";
    }
    
});

function setDimensions(dim){
    
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
            square.style.padding = `${400 / dim}px`;
        }   
    }
}