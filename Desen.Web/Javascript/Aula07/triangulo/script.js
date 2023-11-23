var ctx;
const largura = 400, altura = 400;
function criarCanvas(){
    var pai = document.getElementsByTagName("body")[0];
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
    pai.appendChild(canvas);
    ctx = canvas.getContext("2d");
}
function limpar(){
    ctx.clearRect(0, 0, largura, altura);
}
function trianguloColorido(){
    limpar();
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fillStyle = "#FF69B4";
    ctx.fill();
}
function triangulo(){
    limpar();
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}
