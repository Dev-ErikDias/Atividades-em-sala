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
function circulo(){
    limpar();
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, 2*Math.PI);
    ctx.stroke();
}
function arco(){
    limpar();
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI);
    ctx.stroke();
}
function arcoAntiHorario(){
    limpar();
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI, true);
    ctx.stroke();
}
function circuloColorido(){
    limpar();
    ctx.beginPath();
    ctx.fillStyle = '#FF69B4';
    ctx.arc(200, 200, 150, 0, 2*Math.PI);
    ctx.fill();
}
