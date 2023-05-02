function caixaAlta() {
  //pegar tos os inputs de tipo texto e
  //agendar a função que pega o valor do inputs e devolve em caixa alta;

  let inputs = document.querySelectorAll('input[type="text"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onkeyup = (evento) => {
      //target é um atributo do evento que armazena quem disparou o evento (causador do evento)
      evento.target.value = evento.target.value.toUpperCase();
    };
  }
}

function buscaEndereco() {
  const cep = document.querySelector("input[id=cep]");

  cep.addEventListener("blur", (e) => {
    const value = cep.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.logradouro) {
          document.querySelector("input[id=rua]").value = json.logradouro;
          document.querySelector("input[id=bairro]").value = json.bairro;
          document.querySelector("input[id=cidade]").value = json.localidade;
          document.querySelector("input[id=uf]").value = json.uf;
        }
      });
  });
}
