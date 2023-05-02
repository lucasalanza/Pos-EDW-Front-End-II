class GerenciadorClientes{
    #listaClientes

    constructor(){
        this.restaurar();
    }

    get listaClientes(){
        return this.#listaClientes;
    }

    adicionar(cliente){
        this.#listaClientes.push(cliente);
        this.salvar();
    }

    remover(cliente){
        this.#listaClientes = this.#listaClientes.filter(item => item.cpf !== cliente.cpf);
        this.salvar();
    }

    restaurar(){
        this.#listaClientes=JSON.parse(localStorage.getItem('listaClientes'));
    }

    salvar(){
        //é necessário armazenar o formato json em localStorage
        localStorage.setItem('listaClientes',JSON.stringify(this.#listaClientes));
    }
}