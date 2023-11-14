var vetComandos=[];
var lR,cR,lC,cC,posCasa, posRobo, comando=0;
const robo = document.createElement("img");
const casa = document.createElement("img");
const col=8,lin=8; 

casa.setAttribute('class', "casa");
robo.setAttribute('class', "robo");

function criarTabela(){
   var pai=document.getElementsByTagName('body')[0];
   var tabela=document.createElement('table');
   
   for(let i=0;i<col;i++) {
       var tr = document.createElement('tr');
       for (let j = 0; j < lin; j++) {
           var td = document.createElement('td');
           td.setAttribute("id", i+","+j);
           tr.appendChild(td);
        }
        if (i === 0) {
          var td = document.createElement('td');
          td.setAttribute("rowspan", lin);
          td.setAttribute("id", 'comandos');
          tr.appendChild(td);
        }
        tabela.appendChild(tr);
  }
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.setAttribute("colspan", col);
  td.setAttribute("id", 'botoes');
  tr.appendChild(td);
  tabela.appendChild(tr);
  pai.appendChild(tabela);

  var tdC = document.createElement('td');
  tdC.setAttribute("id", "contador");
  tr.appendChild(tdC);

  posicionarImagens();
}

function posicionarImagens(){
  aumentarImagens();
  var vet=["abaixo.png","acima.png","direita.png","esquerda.png","vai.png",];
  const celula=document.getElementById('botoes');
  for(let i=0;i<vet.length;i++){
      const botao = document.createElement('img');
      botao.setAttribute("id",i);
      botao.setAttribute("onclick",'incluirComandos(this)');
      botao.src = "img/"+vet[i];
      celula.appendChild(botao);
  }
  lR= Math.round(Math.random() * ((lin/2)-1));
  cR= Math.round(Math.random()* (col-1));
  posRobo=document.getElementById(lR+","+cR);
  robo.src="img/robo.png";
  posRobo.appendChild(robo);
  lC= Math.round(Math.random() * ((lin-1) - (lin/2)) + (lin/2));
  cC= Math.round(Math.random()* (col-1));
  posCasa=document.getElementById(lC+","+cC);
  casa.src="img/casa.png";
  posCasa.appendChild(casa);
}

function incluirComandos(bt){
  var celula = document.getElementById('comandos');
  var i = parseInt(bt.id);
  console.log(vetComandos.length);

    switch(i){
    case 0:{
      celula.innerHTML += 'Abaixo<br>';
      vetComandos.push(i);
      break;
    }
    
    case 1:{
      celula.innerHTML += 'Acima<br>';
      vetComandos.push(i);
      break;
    }
    
    case 2:{
      celula.innerHTML += 'Direita<br>';
      vetComandos.push(i);
      break;
    }
    
    case 3:{
      celula.innerHTML += 'Esquerda<br>';
      vetComandos.push(i);
      break;
    }
    
    case 4: {
      for (let i = 1; i <= vetComandos.length; i++) {
        setTimeout(executarComandos, i * 500);
      }
      break;
    }   
  }
  if(i != 4){
    var celulaC = document.getElementById("contador");
    if(celulaC.innerHTML == ""){
      celulaC.innerHTML += "Comandos: "+vetComandos.length;
    }else{
      celulaC.innerHTML = "Comandos: "+vetComandos.length;
    }
  }
}

function executarComandos(){
    var i = vetComandos[comando++];
    switch(i){
      case 0:{
        movimentarRobo(++lR, cR);
        break;
      }
      
      case 1:{
        movimentarRobo(--lR, cR);
        break;
      }
      
      case 2:{
        movimentarRobo(lR, ++cR);
        break;
      }
      
      case 3:{
        movimentarRobo(lR, --cR);
        break;
      }
    }
}

function movimentarRobo(l, c){
  if(posRobo != posCasa){
    posRobo.innerHTML = "";
  }
  posRobo = document.getElementById(l+","+c);
  if(!verificarVitoria(comando)){
    posRobo.appendChild(robo);   
  }else{
    var casaF = document.createElement("img");
    casaF.setAttribute('class', "casaF");
    casaF.src = "img/casaFuncionando.jpg";
    posRobo.appendChild(casaF);
  }
}

function verificarVitoria(comandoVez){
  var res = "";
  if(posCasa == posRobo){
    diminuirImagens();
    if(comandoVez == vetComandos.length){
      res = "O ROBO CHEGOU NA CASA!";
      mostrarResposta(res);
      posCasa.innerHTML = "";
      return true;
    }
  }else{
    if(robo.style.width == "50px"){
      aumentarImagens();
    }
    if(posRobo == null){
      res = "O ROBO SE PERDEU!";
      mostrarResposta(res);
    }else if(comandoVez == vetComandos.length){
      res = "O ROBO NÃO CHEGOU!";
      mostrarResposta(res);
    }
  }
  return false;
}

function mostrarResposta(res){
  var status = document.getElementById('status');
  var recomeca = document.getElementById('recomeca');
  status.innerHTML = res;
  
  recomeca.style.visibility = "visible";
  recomeca.style.width = "100px";
  recomeca.style.height = "40px";
  if(res != "O ROBO CHEGOU NA CASA!"){
    status.style.color = "red";
  }

  status.style.visibility = "visible";
  status.style.fontSize = "40px";
}

function recomecarJogo(){
  comando = 0;
  var status = document.getElementById('status');
  vetComandos = [];


  recomeca.style.visibility = "hidden";
  recomeca.style.width = "0px";
  status.style.visibility = "hidden";
  status.style.fontSize = "0px";

  var tabela = document.getElementsByTagName('table')[0];
  if (tabela) {
    tabela.parentNode.removeChild(tabela);
  }
  criarTabela();
}

function aumentarImagens(){
  robo.style.width = "75px";
  casa.style.width = "75px";
}

function diminuirImagens(){
  robo.style.width = "50px";
  casa.style.width = "50px";
}
