const rojo = document.getElementById("rojo")
const azul = document.getElementById("azul")
const verde = document.getElementById("verde")
const amarillo = document.getElementById("amarillo")
const key = document.getElementById("key")

const pintarNegro = function(element, color) {
    element.style.backgroundColor = "Black"
    element.style.color = color
}

rojo.addEventListener("click", function() {
    pintarNegro(rojo, "red")
})
azul.addEventListener("click", function() {
    pintarNegro(azul, "blue")
})
verde.addEventListener("click", function() {
    pintarNegro(verde, "green")
})
amarillo.addEventListener("click", function() {
    pintarNegro(amarillo, "yellow")
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === "A"){
        key.style.backgroundColor = "pink"
        
    } else if (event.key === 's'|| event.key === "S") {
        key.style.backgroundColor = "cyan"
    } else if (event.key === 'd'|| event.key === "D") {
        key.style.backgroundColor = "orange"
    } else if (event.key === "q" || event.key === "Q") {
        key.innerHTML.style.backgroundColor = "purple"
    }
})
        

document.addEventListener('keydown', function(event) {

     if (event.key === "q" || event.key === "Q") {
        createDiv('purple');
    } else if (event.key === "w" || event.key === "W") {
        createDiv('gray');
    } else if (event.key === "e" || event.key === "E") {
        createDiv('brown');
    }
});

function createDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '150px';
    newDiv.style.height = '150px';
    newDiv.style.backgroundColor = color;
    newDiv.style.margin = '10px';

    const container2 = document.querySelector('.container2');
    if (!container2) {
        const newContainer = document.createElement('div');
        newContainer.className = 'container2';
        newContainer.style.display = 'flex';
        newContainer.style.flexWrap = 'wrap';
        document.body.appendChild(newContainer);
        newContainer.appendChild(newDiv);
    } else {
        container2.appendChild(newDiv);
    }
}
    