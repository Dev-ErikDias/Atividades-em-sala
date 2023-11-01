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
    td.setAttribute("colspan", col+1);
    td.setAttribute("id", 'botoes');
    tr.appendChild(td);
    tabela.appendChild(tr);
    pai.appendChild(tabela);
    posicionarImagens();
}

function posicionarImagens(){
   var vet=["abaixo.png","acima.png","direita.png","esquerda.png","vai.png",];
   const celula=document.getElementById('botoes');
   for(let i=0;i<vet.length;i++){
       const botao = document.createElement('img');
       botao.setAttribute("id",i);
       botao.setAttribute("onclick",'incluirComandos(this)');
       botao.src = "img/"+vet[i];
       celula.appendChild(botao);
   }

     lR= Math.round(Math.random() * (lin/2));
     cR= Math.round(Math.random()* (col-1));
     posRobo=document.getElementById(lR+","+cR);
     robo.src="img/robo.png";
     posRobo.appendChild(robo);
    lC= Math.round(Math.random() * ((lin-1) - (lin/2)) + (lin/2));
    cC= Math.round(Math.random()* (col-1));
    posCasa=document.getElementById(lC+","+cC);
    casa.src="img/casa.png"
    posCasa.appendChild(casa);
}

function incluirComandos(bt){
  celula = document.getElementById('comandos');
  var i = parseInt(bt.id);

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
  verificarVitoria(comando);
  posRobo.appendChild(robo);   
}

function verificarVitoria(comandoVez){
  var status = document.getElementById('status');
  
  if(posCasa == posRobo){
    robo.style.width = "50px";
    casa.style.width = "50px";
    robo.style.height = "auto";
    casa.style.height = "auto";
  }else{
    robo.style.width = "75px";
    casa.style.width = "75px";
    robo.style.height = "auto";
    casa.style.height = "auto";
  }  
}
