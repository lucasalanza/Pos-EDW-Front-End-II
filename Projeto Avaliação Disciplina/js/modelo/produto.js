//definicao classe cliente utilizando a sintaxe ecma6

class Produto {
  //#region objetos da classe
  #nome;
  #descricao;
  #preco;
  #fornecedor;
  //#endregion objetos

  constructor(descricao, nome, preco, fornecedor) {
    this.#descricao = descricao;
    this.#nome = nome;
    this.#preco = preco;
    this.#fornecedor = fornecedor;
  }
  //#region Gets e Sets objetos
  get descricao() {
    return this.#descricao;
  }
  set descricao(valor) {
    this.#descricao = valor;
  }

  get nome() {
    return this.#nome;
  }
  set nome(valor) {
    this.#nome = valor;
  }

  get preco() {
    return this.#preco;
  }
  set preco(valor) {
    this.#preco = valor;
  }

  get fornecedor() {
    return this.#fornecedor;
  }
  set fornecedor(valor) {
    this.#fornecedor = valor;
  }
  //#endregion

  //formato JSON de um cliente
  //sobrescrevendo o metodo toJSON da classe PAI (objeto)
  toJSON() {
    return {
      descricao: this.#descricao,
      nome: this.#nome,
      preco: this.#preco,
      fornecedor: this.#fornecedor,
    };
  }
}
