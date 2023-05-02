class GerenciadorProdutos {
  #listaProdutos;

  constructor() {
    this.restaurar();
  }

  get ListaProdutos() {
    return this.#listaProdutos;
  }

  adicionar(produto) {
    this.#listaProdutos.push(produto);
    this.salvar();
  }

  remover(prod) {
    this.#listaProdutos = this.#listaProdutos.filter(x => x.nome !== prod.nome);
    this.salvar();
  }

  restaurar() {
    this.#listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
  }
  salvar() {
    // é necessario armazenar o formado json em localstorage.
    localStorage.setItem("listaProdutos", JSON.stringify(this.#listaProdutos));
  }
}
