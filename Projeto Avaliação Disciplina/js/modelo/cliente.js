//definicao classe cliente utilizando a sintaxe ecma6

class Cliente {
  //#region objetos da classe
  #cpf;
  #nome;
  #rua;
  #cidade;
  #uf;
  #cep;
  #bairro;
  #dataNasc;
  //#endregion objetos

  constructor(cpf, nome, rua, cidade, uf, cep, bairro, dataNasc) {
    this.#cpf = cpf;
    this.#nome = nome;
    this.#rua = rua;
    this.#cidade = cidade;
    this.#uf = uf;
    this.#cep = cep;
    this.#bairro = bairro;
    this.#dataNasc = dataNasc;
  }
  //#region Gets e Sets objetos
  get cpf() {
    return this.#cpf;
  }
  set cpf(valor) {
    this.#cpf = valor;
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
  get dataNasc() {
    return this.#dataNasc;
  }
  set dataNasc(valor) {
    this.#dataNasc = valor;
  }
  //#endregion

  //formato JSON de um cliente
  //sobrescrevendo o metodo toJSON da classe PAI (objeto)
  toJSON() {
    return {
      cpf: this.#cpf,
      nome: this.#nome,
      rua: this.#rua,
      cidade: this.#cidade,
      uf: this.#uf,
      cep: this.#cep,
      bairro: this.#bairro,
      dataNasc: this.#dataNasc,
    };
  }
}
