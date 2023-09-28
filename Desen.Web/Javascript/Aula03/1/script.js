function dadosFormulario(){
    txt = document.getElementById("txt1");
    sel = document.getElementById("sel");
    box = document.getElementsByName("box");
    radio = document.getElementsByName("radio");
    area = document.getElementById("texto");
    resumo = "";
    label = document.getElementsByTagName("label")[0];
    resumo += "<br> Campo Texto: "+txt.value;
    resumo += "<br> Campo de seleção: "+sel.value;
    if(radio[0].checked){
        resumo+= "<br> Radio selecionado: "+radio[0].value;
    }
    else{
        resumo += "<br> Radio selecionado: "+radio[1].value;
    }
    
    for(i = 0; i < box.length; i++){
        if(box[i].checked){
            resumo += "<br> Box selecionado: "+box[i].value;
        }
    }
    resumo+= "<br> Texto: "+area.value;
    label.innerHTML = resumo;
}
