function autenticar(evento){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email !== "" && senha !== ""){
        if (senha === '123456'){
            document.location.href="file:///D:/ConteudoProduzidoAula1/Exemplo1/menuSistema.html";
        }
        else{
            alert("Senha inválida!");
        }
    }
    else{
        if (email === ""){
            alert("Informe o email!");
        }
        if (senha === ""){
            alert("Informe a senha!");
        }
    }

    evento.preventDefault(); //cancela o evento de submissão
    evento.stopPropagation(); // interrompe a propagação para que o evento não seja visível aos outros interessados
}

const formulario = document.getElementById("formLogin");
formulario.onsubmit = autenticar;