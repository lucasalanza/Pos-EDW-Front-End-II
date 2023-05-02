const formProduto = document.getElementById("formProduto");
let gerenciador = new GerenciadorProdutos();

///agenda a execução da função manipularSubmissaoDados
//quando o usuario clicar no botao cadastrar(enviar)
///agora somos ouvintes interessados no evento on submit do formulario
formProduto.onsubmit = manipularSubmissaoDados;

caixaAlta();
window.onload = () => exibirTabelaProdutos(gerenciador);

function obterProdutoDoFormulario() {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const preco = document.getElementById("preco").value;
  const fornecedor = document.getElementById("fornecedor").value;

  let produto = new Produto(descricao, nome, preco, fornecedor);
  return produto;
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  
  document.getElementById("nome").disabled = false;
  document.getElementById("descricao").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("fornecedor").value = "";
  let botao = document.getElementById("botaoacao");
  botao.innerHTML = "Cadastrar";
  botao.className = 'btn btn-success';

}

function manipularSubmissaoDados(evento) {
  //todo formulario html5 disponibiliza a função checkvalidity
  //para todos os campos requeridos (required) do formulario
  if (formProduto.checkValidity()) {
    //cadastrar o Produto
    let produto = obterProdutoDoFormulario();

    let botao = document.getElementById("botaoacao");
    const acao = botao.innerHTML;

    switch (acao) {
      case 'Cadastrar':
        gerenciador.adicionar(produto);
        break;
      case 'Alterar':
        if (confirm("Confirma a Alteração de dados deste Produto?")) {
          gerenciador.remover(produto);
          gerenciador.adicionar(produto);
        }
        break;
      case 'Excluir':
        if (confirm("Confirma a Exclusão deste Produto?")) {
          gerenciador.remover(produto);
        }
        break;
      default: break;
    }

    limparFormulario();
    exibirTabelaProdutos(gerenciador);
    formProduto.classList.remove("was-validated");
  } else {
    //criticar o formulario adicionando a classe de erro
    formProduto.classList.add("was-validated");
  }

  evento.preventDefault();
  evento.stopPropagation();
}

function exibirTabelaProdutos(lista) {
  //recuperar o elemento da pagina escolhido para conter a tabela de dados do Produto
  let espacoTabela = document.querySelector("[data-tabela]");
  espacoTabela.innerHTML = ""; //zera o conteudo html da div tabela

  if (gerenciador.length === 0) {
    espacoTabela.innerHTML = `<div class="alert alert-info" role="alert">
                                    Não Existem Produtos Cadastrados
                                  </div > `;
  } else {
    //criando um elemento inedito no documento do tipo table
    let tabela = document.createElement("table");
    tabela.className = "table table-striped table-hover";
    //tabela.classList.add(["table","table-striped","table-hover"]);

    //criando o elemento cabecalho
    let cabecalho = document.createElement("thead");
    cabecalho.innerHTML = `<tr>        
                                <th>Nome</th>       
                                <th>descricao</th> 
                                <th>preço</td>
                                <th>Fornecedor</th>
                              <th>Ações</th>

                            </tr>`;
    tabela.appendChild(cabecalho);

    //criando o corpo da tabela
    let corpo = document.createElement("tbody");
    //para cada Produto, sera necessario adicionar uma linha no corpo na tabela

    for (let i = 0; i < gerenciador.ListaProdutos.length; i++) {
      const cli = gerenciador.ListaProdutos[i];
      let linha = document.createElement("tr");
      linha.innerHTML = `<td>${cli.nome}</td>
                               <td>${cli.descricao}</td>
                               <td>${cli.preco}</td>
                               <td>${cli.fornecedor}</td>
                               <td>
                               <button class="btn btn-outline-warning" onclick=selecionarRegistro('${cli.nome.replace(' ','&#32;')}','alterar')>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                 </svg>
                               </button>
                               <button class="btn btn-outline-danger" onclick=selecionarRegistro('${cli.nome.replace(' ','&#32;')}','excluir')>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                   <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                 </svg> 
                                </button>
                            </td>`;
      corpo.appendChild(linha);
    }

    tabela.appendChild(corpo);
    espacoTabela.appendChild(tabela);
  }
}



function selecionarRegistro(nome, acao) {

  //desestruturando a lista retornada pelo metodo filter na variavel produto
  //com este modo ele pega o primeiro retorno da lista. se nao tiver retorno nao da erro, mas fica undefined.

  let [produto] = gerenciador.ListaProdutos.filter(item => item.nome  === nome);

  document.getElementById("nome").value = produto.nome;
  document.getElementById("nome").disabled = true;
  document.getElementById("descricao").value =  produto.descricao;
  document.getElementById("preco").value = produto.preco;
  document.getElementById("fornecedor").value = produto.fornecedor;
  let botao = document.getElementById("botaoacao");

  switch (acao) {
    case 'excluir':
      //modificar o botao cadastrar para cor vermelha (danger)
      //e texto para excluir
      botao.innerHTML = "Excluir";
      botao.className = 'btn btn-danger';
      break;
    case 'alterar':
      //modificar o botao cadastrar para cor amarelo (warning)
      //e texto para alterar
      botao.innerHTML = "Alterar";
      botao.className = 'btn btn-warning';

      break;
    default: break;
  }
}
