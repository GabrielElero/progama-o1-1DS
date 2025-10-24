class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// ------------------------------------
// Exemplo de Teste
// ------------------------------------

// 1. Crie uma instância da classe Pessoa com valores fictícios.
const pessoa1 = new Pessoa("Carlos", 35);

// 2. Chame o método apresentar() dessa instância.
pessoa1.apresentar();
