var produtos = [
    [1000, 1001, 1002], 
    ["Mouse", "Teclado", "Monitor"], 
    [35, 50, 350]
];

var pos; soma = 0;
var pai;
function buscarProduto(){
    var cod = document.frVendas.cod.value;      
    pos = produtos[0].indexOf(parseInt(cod));
    document.frVendas.produto.value = produtos[1][pos];
}

function incluir(){
    var qtd = parseInt(document.frVendas.qtd.value);
    pai = document.getElementById("tabela");
    var tr = document.createElement("tr");
    for(let i = 0; i < 3; i++){
        var td = document.createElement("td");
        td.innerHTML = produtos[i][pos];
        tr.appendChild(td);
    }
    td = document.createElement("td");
    td.innerHTML = qtd * produtos[2][pos];
    soma += qtd * produtos[2][pos];
    tr.appendChild(td);
    pai.appendChild(tr);
    
}

function concluirVenda(){
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.setAttribute("colspan", 3);
    td.innerHTML = "Total";
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = soma;
    tr.appendChild(td);
    pai.appendChild(tr);
}
