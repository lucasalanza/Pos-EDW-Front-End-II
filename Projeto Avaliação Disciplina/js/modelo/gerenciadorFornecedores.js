class GerenciadorFornecedores {
  #listaFornecedores;

  constructor() {
    this.restaurar();
  }

  get ListaFornecedores() {
    return this.#listaFornecedores;
  }

  adicionar(fornecedor) {
    this.#listaFornecedores.push(fornecedor);
    this.salvar();
  }

  remover(fornecedor) {
    this.#listaFornecedores = this.#listaFornecedores.filter(x => x.cnpj !== fornecedor.cnpj);
    this.salvar();

  }
  restaurar() {
    this.#listaFornecedores = JSON.parse(
      localStorage.getItem("listaFornecedores")
    );
  }
  salvar() {
    // é necessario armazenar o formado json em localstorage.
    localStorage.setItem(
      "listaFornecedores",
      JSON.stringify(this.#listaFornecedores)
    );
  }
}
