var ctx;
const largura = 400, altura = 400;
var pai = document.getElementsByTagName("body")[0];
var canvas = document.createElement("canvas");
canvas.setAttribute("width", largura);
canvas.setAttribute("height", altura);
pai.appendChild(canvas);
ctx = canvas.getContext("2d");
var x = 0, y = 0;

function moverCirculo(){
    return function(){
        limpar();
        ctx.beginPath();
        ctx.arc(x++, y++, 150, 0, 2*Math.PI);
        ctx.stroke();
    }
}

setInterval(moverCirculo(), 10);

function limpar(){
    ctx.clearRect(0, 0, largura, altura);
}
