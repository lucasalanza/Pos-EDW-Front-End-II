class GerenciadorClientes {
  #listaClientes;

  constructor() {
    this.restaurar();
  }

  get ListaClientes() {
    return this.#listaClientes;
  }

  adicionar(cliente) {
    this.#listaClientes.push(cliente);
    this.salvar();
  }

  remover(cliente) {
    this.#listaClientes = this.#listaClientes.filter(x => x.cpf !== cliente.cpf);
    this.salvar();

  }

  restaurar() {
    this.#listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
  }
  salvar() {
    // é necessario armazenar o formado json em localstorage.
    localStorage.setItem("listaClientes", JSON.stringify(this.#listaClientes));
  }

}
