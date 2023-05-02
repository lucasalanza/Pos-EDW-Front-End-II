
var nome = prompt("Digite seu nome", "Fulano");

function saudacao() {
    //para variáveis locais, nós utilizar a palavra reservada let
    let data = new Date();
    const hora = data.getHours();
    if (hora >= 0 && hora < 12) {
        return "Bom dia, ";
    }
    else if (hora >= 12 && hora <= 18) {
        return "Boa tarde, ";
    }
    else {
        return "Boa noite, ";
    }
}

function mensagem(funcaoDeSaudacao){
    alert("Obrigado por acessar nossa página");
    return ()=>{
        return funcaoDeSaudacao();
    }
}
const minhaFuncao = mensagem();

function manipularClique(){
    console.log("Você clicou na página");
}

document.onclick = manipularClique;

//string literals 
//Permite que strings sejam declaradas de uma forma mais amigável ao desenvolvedor
//Tornando possível a declaração de strings e mais de uma linha
//e a concatenação com variáveis sem o uso do operador "+"
//Para utilizar string literals é necessário iniciar e finalizar
//uma string utilizando o caracter "`".
document.write(`<div class='alert alert-success' role='alert'> 
                       ${minhaFuncao(saudacao)()} ${nome}!
                </div>`);
