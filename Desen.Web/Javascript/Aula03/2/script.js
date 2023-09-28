function processandoDados(){
    const box = document.getElementsByName("box");
    let frutas = "O cliente comprou:";
    let frutasValor = 0;
    for(i = 0; i < box.length; i++){
        if(box[i].checked){
            frutas += "&nbsp"+box[i].id;
            frutasValor += parseFloat(box[i].value);
        }
    }

    label = document.getElementsByTagName("label")[0];
    label.innerHTML = frutas +"<br>Com o total de R$"+frutasValor;
}
