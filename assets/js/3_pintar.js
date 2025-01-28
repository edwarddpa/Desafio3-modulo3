// Script de pintar.html

const ele = document.getElementById("ele1")
function pintar(color) {
    ele.style.backgroundColor = color
}
pintar('green')
ele.addEventListener("click", function pintar() {
    ele.style.backgroundColor = 'yellow'
})