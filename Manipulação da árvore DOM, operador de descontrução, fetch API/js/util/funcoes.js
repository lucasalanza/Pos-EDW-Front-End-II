function caixaAlta() {
    //pegar todos os inputs do tipo texto
    //e agendar a execução de uma funçao
    //que pega o valor desses inputs, e no momento
    //em há uma mudança de conteúdo, os valores desses
    //inputs sejam alterados para caixa alta
    let inputs = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < inputs.length; i++) {
        //inputs[i].addEventListener('change',funcao);
        inputs[i].onkeydown = (evento) => {
            //target é um atributo do evento
            //que armazena quem disparou o evento
            evento.target.value = evento.target.value.toUpperCase();
        }
    }

}