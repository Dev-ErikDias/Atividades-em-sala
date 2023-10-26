const col = 8, lin = 8;
var lR, cR, lC, cC, posCasa, posRobo, comando = 0;
const robo = document.createElement("img");
const casa = document.createElement("img");

function criarTabela(){
    var pai = document.getElementsByTagName("body")[0];
    var tabela = document.createElement("table");
    for(let i = 0; i < col;i++){
        var tr = document.createElement("tr");
        for(let j = 0; j < lin;j++){
            var td = document.createElement("td");
            td.setAttribute("id", i+","+j);
            tr.appendChild(td);
        }

        if(i === 0){
            var td = document.createElement("td");
            td.setAttribute("rowspan", lin);
            td.setAttribute("id", "comandos");
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("colspan", col+1);
    td.setAttribute("id","botoes");
    tr.appendChild(td);
    tabela.appendChild(tr);
    pai.appendChild(tabela);
    posicionarImagens();
}

function posicionarImagens(){
    var vet =  ["abaixo.png", "acima.png" , "direita.png", "esquerda.png" , "vai.png"];
    const celula = document.getElementById("botoes");
    for(let i = 0; i< vet.length;i++){
        const botao = document. createElement("img");
        botao.setAttribute("id", i);
        botao.setAttribute("onclick", "incluirComandos(this)");
        botao.src = "img/"+vet[i];
        celula.appendChild(botao);
    }

    lR = Math.round(Math.random()*(lin/2));
    cR = Math.round(Math.random()* (col-1));
    posRobo = document.getElementById(lR+","+cR);
    robo.src = "img/robo.png";
    posRobo.appendChild(robo);
    lC = Math.round(Math.random()* ((lin - 1) - (lin/2) + (lin/2)));
    cC = Math.round(Math.random() * (col - 1));
    posCasa = document.getElementById(lC+ ","+cC);
    casa.src = "img/casa.png";
    posCasa.appendChild(casa);
}
