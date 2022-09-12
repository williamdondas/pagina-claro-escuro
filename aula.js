
botao.addEventListener("click",adicionaClasse);
botao2.addEventListener("click",adicionaClasse2);

function adicionaClasse(){
        botao.classList.remove("botao1");
        botao.classList.add("botao2");
        botao.textContent = "";
        botao2.classList.remove("botao2");
        botao2.classList.add("botao3");
        botao2.textContent = "MODO CLARO"
        corpo.classList.remove("corfundo1");
        corpo.classList.add("corfundo2");
        titulo.classList.remove("cortitulo1");
        titulo.classList.add("cortitulo2");
        texto.classList.remove("paragrafo");
        texto.classList.add("paragrafo2");
}

function adicionaClasse2(){
    botao2.classList.remove("botao3");
    botao2.classList.add("botao1");
    botao2.textContent = ""
    botao.classList.remove("botao2");
    botao.classList.add("botao1");
    botao.textContent = "MODO ESCURO";
    corpo.classList.remove("corfundo2");
    corpo.classList.add("corfundo1");
    titulo.classList.remove("cortitulo2");
    titulo.classList.add("cortitulo1");
    texto.classList.remove("paragrafo2");
    texto.classList.add("paragrafo");
}
      


   