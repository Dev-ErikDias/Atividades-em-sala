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
function retangulo(){
    limpar();
    ctx.strokeRect(1, 100, 150, 50);
}
function retanguloColorido(){
    limpar();
    ctx.beginPath();
    ctx.fillStyle = "#FF69B4";
    ctx;strokeStyle = "magenta";
    ctx.fillRect(1, 100, 150, 50);
}
