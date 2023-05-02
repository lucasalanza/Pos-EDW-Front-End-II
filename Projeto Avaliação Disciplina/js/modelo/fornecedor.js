//definicao classe cliente utilizando a sintaxe ecma6

class Fornecedor {
  //#region objetos da classe
  #cnpj;
  #nome;
  #rua;
  #cidade;
  #uf;
  #cep;
  #bairro;
  #ramoAtuacao;
  //#endregion objetos

  constructor(cnpj, nome, rua, cidade, uf, cep, bairro, ramoAtuacao) {
    this.#cnpj = cnpj;
    this.#nome = nome;
    this.#rua = rua;
    this.#cidade = cidade;
    this.#uf = uf;
    this.#cep = cep;
    this.#bairro = bairro;
    this.#ramoAtuacao = ramoAtuacao;
  }
  //#region Gets e Sets objetos
  get cnpj() {
    return this.#cnpj;
  }
  set cnpj(valor) {
    this.#cnpj = valor;
  }

  get nome() {
    return this.#nome;
  }
  set nome(valor) {
    this.#nome = valor;
  }

  get rua() {
    return this.#rua;
  }
  set rua(valor) {
    this.#rua = valor;
  }

  get cidade() {
    return this.#cidade;
  }
  set cidade(valor) {
    this.#cidade = valor;
  }

  get cep() {
    return this.#cep;
  }
  set cep(valor) {
    this.#cep = valor;
  }

  get uf() {
    return this.#uf;
  }
  set uf(valor) {
    this.#uf = valor;
  }
  get bairro() {
    return this.#bairro;
  }
  set bairro(valor) {
    this.#bairro = valor;
  }

  get ramoAtuacao() {
    return this.#ramoAtuacao;
  }
  set ramoAtuacao(valor) {
    this.#ramoAtuacao = valor;
  }
  //#endregion

  //formato JSON de um cliente
  //sobrescrevendo o metodo toJSON da classe PAI (objeto)
  toJSON() {
    return {
      cnpj: this.#cnpj,
      nome: this.#nome,
      rua: this.#rua,
      cidade: this.#cidade,
      uf: this.#uf,
      cep: this.#cep,
      bairro: this.#bairro,
      ramoAtuacao: this.#ramoAtuacao,
    };
  }
}
