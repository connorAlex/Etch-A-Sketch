//set up a 16x16 grid of squares

const container = document.querySelector(".container");

//get slider value
let range = document.querySelector(".slider");
let label = document.querySelector(".label");
//set label to slider value; default is 16.
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


//add reset click listener
let btn = document.querySelector(".reset");
btn.addEventListener("click", function(e) {
    let rows = container.childNodes;
    rows.forEach(function (e){
        e.childNodes.forEach(function(s){
            s.style.backgroundColor = "#FBF7F4";
        });
    });
    console.log("asdf");
});

//add mouse click listener
let cont = document.querySelector(".container");
cont.addEventListener("mouseover", draw);
cont.addEventListener("touchstart");
function setDimensions(dim){
 
    //create rows
    for (i = 0; i < dim; i ++){
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        //set up squares
        for (j = 0; j < dim; j ++){
            const square = document.createElement("div");
            square.className = "square";
            square.style.padding = `${400 / dim}px`;       //spacing must be relative to the dimensions
        
            row.appendChild(square);
            
        }   
    }
}

function draw(e){
    let rainbow = document.querySelector(".rainbow").checked;
    if ( e.target.className === "square"){
        if (rainbow === true){
            
            e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        else{
            e.target.style.backgroundColor = "#6C9A8B";
        }
        
    }
}