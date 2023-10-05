function criarTabela(){
          pai = document.getElementsByTagName("table")[0];
          linhas =  document.getElementById("linhas").value;
          colunas = document.getElementById("colunas").value;

          for(i = 1; i<=linhas;i++){
                    linha = document.createElement("tr");
                    for(j = 1; j<=colunas;j++){
                              coluna = document.createElement("td");
                              linha.appendChild(coluna);
                    }
                    pai.appendChild(linha);
          }

}
