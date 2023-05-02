const formCliente = document.getElementById('formCliente');
let gerenciador = new GerenciadorClientes();
//todos inputs do tipo texto terão seu conteúdo
//transformado em caixa alta
caixaAlta();

window.onload = () => {
    exibirTabelaClientes(gerenciador.listaClientes);
};
//agendamento da execução da função manipularSubmissaoDados
//quando o usuário clicar no botão cadastrar 
//Agora somos ouvintes/interessados no evento onsubmit do formulário
formCliente.onsubmit = manipularSubmissaoDados;

function obterClienteDoFormulario() {
    //obtém os dados do formulário
    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;
    const dataNasc = document.getElementById('dataNasc').value;

    let cliente = new Cliente(cpf, nome, endereco, cidade, uf, cep, dataNasc);
    return cliente;
}

function limparFormulario() {
    document.getElementById('cpf').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('dataNasc').value = '';
    let botaoAcao = document.getElementById('botaoAcao');
    botaoAcao.innerHTML = 'Cadastrar';
    botaoAcao.className = 'btn btn-success';

}

function manipularSubmissaoDados(evento) {

    //todo formulário html 5 disponibiliza a função checkValidity
    //Para todos os campos requeridos (required) do formulário
    if (formCliente.checkValidity()) {
        let cliente = obterClienteDoFormulario();
        let botaoAcao = document.getElementById('botaoAcao');
        const acao = botaoAcao.innerHTML;
        if (acao === 'Cadastrar') {
            gerenciador.adicionar(cliente);
        }
        else if (acao === 'Excluir') {
            if (confirm('Confirma a exclusão desse cliente?')) {
                gerenciador.remover(cliente);
            }
        }
        else if (acao === 'Alterar') {
            if (confirm('Confirma alterar os dados desse cliente?')) {
                gerenciador.remover(cliente);
                gerenciador.adicionar(cliente);
            }
        }
        limparFormulario();
        exibirTabelaClientes(gerenciador.listaClientes);
        formCliente.classList.remove("was-validated");
    }
    else {
        formCliente.classList.add("was-validated");
    }

    evento.preventDefault();
    evento.stopPropagation();
}

function exibirTabelaClientes(listaClientes) {
    //recuperar o elemento da página escolhido para conter a tabela
    let espacoTabela = document.querySelector("[data-tabela]");
    espacoTabela.innerHTML = "";
    if (listaClientes.length === 0) {
        espacoTabela.innerHTML = `<div class="alert alert-info" role="alert">
                                    Não há clientes cadastrados!
                                </div>`;
    }
    else {
        //criando um inédito elemento na página
        //com document.createElement
        let tabela = document.createElement('table');
        tabela.className = "table table-striped table-hover";
        //tabela.classList.add(["table","table-striped","table-hover"]);

        //criando o elemento cabeçalho da tabela
        let cabecalho = document.createElement('thead');
        cabecalho.innerHTML = `<tr>
                                <th>CPF</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>CEP</th>
                                <th>Data Nascimento</th>
                                <th>Ações</th>
                             </tr>`;
        tabela.appendChild(cabecalho);
        //criando o corpo da tabela
        let corpo = document.createElement('tbody');
        //para cada cliente, será necessário adicionar uma linha no corpo da tabela
        for (let i = 0; i < listaClientes.length; i++) {
            let linha = document.createElement('tr');
            const cliente = listaClientes[i];
            linha.innerHTML = `<td>${cliente.cpf}</td>
                             <td>${cliente.nome}</td>   
                             <td>${cliente.endereco}</td>
                             <td>${cliente.cidade}</td>
                             <td>${cliente.uf}</td>
                             <td>${cliente.cep}</td>
                             <td>${cliente.dataNasc}</td>
                             <td>
                                <button class='btn btn-danger' onclick=selecionarRegistro('${cliente.cpf}','excluir')>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </button>
                                <button class='btn btn-warning' onclick=selecionarRegistro('${cliente.cpf}','alterar')>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor" 
                                    class="bi bi-pencil" 
                                    viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </button>
                             </td>
                            `;
            corpo.appendChild(linha);
        }
        tabela.appendChild(corpo);
        espacoTabela.appendChild(tabela);
    }

}

function selecionarRegistro(cpf, acao) {
    //desestruturando a lista retornada pelo método filter
    //e atribuindo um possível cliente na variável cliente
    const [cliente] = gerenciador.listaClientes.filter(item => item.cpf === cpf);
    if (cliente) {
        document.getElementById('cpf').value = cliente.cpf;
        document.getElementById('nome').value = cliente.nome;
        document.getElementById('endereco').value = cliente.endereco;
        document.getElementById('cidade').value = cliente.cidade;
        document.getElementById('uf').value = cliente.uf;
        document.getElementById('cep').value = cliente.cep;
        document.getElementById('dataNasc').value = cliente.dataNasc;
        let botaoAcao = document.getElementById('botaoAcao');
        switch (acao) {
            case 'excluir':
                botaoAcao.innerHTML = 'Excluir';
                botaoAcao.className = 'btn btn-danger';
                break;
            case 'alterar':
                botaoAcao.innerHTML = 'Alterar';
                botaoAcao.className = 'btn btn-warning';
                break;
            default:
                break;
        }
    }
}