//set up a 16x16 grid of squares

const container = document.querySelector(".container");
let range = document.querySelector(".slider");
let label = document.querySelector(".label");

let mydim = range.value;
let btn = document.querySelector(".reset");
let cont = document.querySelector(".container");

setDimensions(mydim);

cont.addEventListener("mouseover", draw);
cont.addEventListener("touchmove", draw);

label.innerHTML = range.value;
range.oninput  = adjustRange;

btn.addEventListener("click", clear);

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
            square.style.padding = `${400 / dim}px`;       
            row.appendChild(square);
        }   
    }
}

function draw(e){
    let rainbow = document.querySelector(".rainbow").checked;
    let eraser = document.querySelector(".eraser").checked;
    if ( e.target.className === "square"){
        if (rainbow === true){
            e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        else if (eraser === true){
            e.target.style.backgroundColor = "#FBF7F4";
        }
        else{
            e.target.style.backgroundColor = "#6C9A8B";
        }
    }
}

function adjustRange(){
    label.innerHTML = this.value;
    mydim = this.value;
    while (container.firstChild) { 
        container.removeChild(container.firstChild);
    }
    setDimensions(mydim);
}

function clear(){
    let rows = container.childNodes;
    rows.forEach(function (e){
        e.childNodes.forEach(function(s){
            s.style.backgroundColor = "#FBF7F4";
        });
    });
    console.log("asdf");
}