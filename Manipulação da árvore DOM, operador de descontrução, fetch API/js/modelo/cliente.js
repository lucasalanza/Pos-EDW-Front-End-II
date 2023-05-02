//Definição de uma classe Cliente utilizando a sintaxe ECMA6
class Cliente {
    #cpf
    #nome
    #endereco
    #cidade
    #uf
    #cep
    #dataNasc

    constructor(cpf,nome,endereco,cidade,
                uf,cep,dataNasc){
        this.#cpf=cpf;
        this.#nome=nome;
        this.#endereco=endereco;
        this.#cidade=cidade;
        this.#uf=uf;
        this.#cep=cep;
        this.#dataNasc=dataNasc;
    }

    get cpf(){  //cliente.cpf
        return this.#cpf;
    }

    set cpf(novoCpf){ //cliente.cpf="123.456.789-10"
        this.#cpf=novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome=novoNome;
    }


    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco=novoEndereco;
    }


    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade=novaCidade;
    }

    get uf(){
        return this.#uf;
    }

    set uf(novaUf){
        this.#uf=novaUf;
    }

    get cep(){
        return this.#cep;
    }

    set cep(novoCep){
        this.#cep=novoCep;
    }

    get dataNasc(){
        return this.#dataNasc;
    }

    set dataNasc(novaDataNasc){
        this.#dataNasc=novaDataNasc;
    }

    //formato JSON de um cliente
    //sobrescrevendo o método toJSON da classe pai (Object)
    toJSON(){
        return {
            "cpf":this.#cpf,
            "nome":this.#nome,
            "endereco":this.#endereco,
            "cidade":this.#cidade,
            "uf":this.#uf,
            "cep":this.#cep,
            "dataNasc":this.#dataNasc
        }
    }
}
