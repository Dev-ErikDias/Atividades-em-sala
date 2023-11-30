var ctx;
const largura = window.innerWidth-200, altura = 400;
var vetCor = ['#FF0000', '#FFFF00', '#0000FF', '#008000'];
var vetNomes = ['Vermelho', 'Amarelo', 'Azul', 'Verde'];
var vetCirculos = [];
var intervalo;
var placar = [];
var correndo = false;

function criarCanvas(){
    var pai = document.getElementsByTagName('div')[0];
    var canvas = document.createElement('canvas');
    canvas.style = "border: solid 1px black";
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
    pai.appendChild(canvas);
    ctx = canvas.getContext("2d");
    criarCirculos();
}

function limpar(){
    ctx.clearRect(0, 0, largura, altura); 
}

function criarCirculos(){
    let y = 50;
    const x = 50, r = 50;
    for(let i = 0; i < 4; i++){
        vetCirculos.push({X: x, Y: y, R: r, cor: vetCor[i], nome: vetNomes[i]});
        y += 100;
    }
    desenharCirculos();
}

function desenharCirculos(){
    for(let i = 0; i < 4;i++){
        ctx.beginPath();
        const grd = ctx.createLinearGradient(0, 0, 130, 0);
        grd.addColorStop(0, vetCirculos[i].cor);
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.arc(vetCirculos[i].X, vetCirculos[i].Y, vetCirculos[i].R, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function run(){
    intervalo = setInterval(corrida, 50);
}

function corrida(){
    if(!correndo){
        reposicionar();
    }
    correndo = true;
    limpar();
    for(let i = 0; i < 4;i++){
        let vel = vetCirculos[i].X += Math.round(Math.random()*10);
        ctx.beginPath();
        ctx.fillStyle = vetCirculos[i].cor;
        ctx.arc(vel, vetCirculos[i].Y, vetCirculos[i].R, 0, 2 * Math.PI);
        if(vel >= largura-vetCirculos[i].R){
            clearInterval(intervalo);
            finalizarCorrida();
        }
        ctx.fill();
    }
    atualizarPlacar();
}

function reposicionar(){
    for(let i = 0; i < 4;i++){
        vetCirculos[i].X = 50;
    }
}

function atualizarPlacar(){
    placar = vetCirculos;
    placar.sort(function(a,b){  //Verifica se os elementos estão ordenados
        if(a.X < b.X) return -1; //Mantem os valores
        if(a.X > b.X) return 1; //Inverte os valores
        return 0;
    });

    document.getElementById("1").innerHTML = "<div style='background-color:"+placar[3].cor+"'>&nbsp; </div>";
    document.getElementById("2").innerHTML = "<div style='background-color:"+placar[2].cor+"'>&nbsp; </div>";
    document.getElementById("3").innerHTML = "<div style='background-color:"+placar[1].cor+"'>&nbsp; </div>";
    document.getElementById("4").innerHTML = "<div style='background-color:"+placar[0].cor+"'>&nbsp; </div>";
}

function finalizarCorrida(){
    correndo = false;
    aposta = document.getElementById("aposta").value;
    saldo = document.getElementById("saldo");
    document.getElementById("vencedor").innerHTML = "Vencedor: "+placar[3].nome;
    if(document.getElementById("jogadores").value === placar[3].cor){
        let r = parseInt(saldo.innerHTML)+parseInt(aposta);
        saldo.innerHTML = r;
    }else{
        saldo.innerHTML -= parseInt(aposta);
    }
}
