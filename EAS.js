//set up a 16x16 grid of squares

const container = document.querySelector(".container");

//create rows
for (i = 0; i < 16; i ++){
    const row = document.createElement("div");
    row.className = "row";
    
    container.appendChild(row);

    //set up squares
    for (j = 0; j < 16; j ++){
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute('data-x', i);
        square.setAttribute('data-y',15 - j);
       
        row.appendChild(square);
    }   
}

//add mouse click listener
let cont = document.querySelector(".container");
cont.addEventListener("mouseover", function(e) {
    console.log(e.target);
    if ( e.target.className === "square"){
        e.target.style.backgroundColor = "black";
    }
    
});