// Declara e inicializa a variável 'idade'
let idade = 30;

// Imprime o valor da variável no console
console.log(idade);


// 1. Define a função chamada 'soma' que aceita dois parâmetros
function soma(a, b) {
  // Retorna a soma dos dois parâmetros
  return a + b;
}

// 2. Chama a função e armazena o resultado em uma variável
let resultado = soma(5, 3);

// 3. Imprime o resultado no console
console.log(resultado); // Saída esperada: 8


// 1. Declara e inicializa a variável com o número a ser testado
let num = 14; 

// 2. Inicia a estrutura condicional if-else
// O operador módulo (%) retorna o resto da divisão.
// Se o resto da divisão por 2 for 0, o número é par.
if (num % 2 === 0) {
  // Bloco executado se a condição for VERDADEIRA (número par)
  console.log("O número é par");
} else {
  // Bloco executado se a condição for FALSA (número ímpar)
  console.log("O número é ímpar");
}


// O loop 'for' itera através dos códigos de caractere ASCII.
// O código ASCII de 'A' é 65 e o de 'Z' é 90.

// 1. Inicializa o contador 'i' com o código de 'A'
for (let i = 65; i <= 90; i++) {
  // 2. Converte o código ASCII (o número 'i') para o caractere correspondente
  const letra = String.fromCharCode(i);

  // 3. Imprime a letra no console
  console.log(letra);
}


// 1. Declaração e inicialização das três variáveis numéricas
let n1 = 7;
let n2 = 8;
let n3 = 9;

// 2. Calcula a soma e divide pelo número de variáveis (3)
// Os parênteses são essenciais para garantir que a soma seja feita antes da divisão.
let media = (n1 + n2 + n3) / 3;

// 3. Imprime o resultado formatado no console
console.log("A média é: " + media);
// Para este exemplo, a saída é (7 + 8 + 9) / 3 = 24 / 3 = 8


console.log("Olá, mundo!");


// 1. Inicializa a variável de controle do loop
let i = 5;

// 2. O loop 'while' continua enquanto a condição for verdadeira (i >= 1)
while (i >= 1) {
  // 3. Imprime o valor atual de 'i'
  console.log(i);

  // 4. Decrementa o valor de 'i' para garantir que o loop termine
  i = i - 1; 
  // Alternativamente: i--;
}

// Saída esperada: 5, 4, 3, 2, 1


function calcularProduto(a, b) {
  let resultado = a * b;
  
  // A execução será pausada nesta linha
  debugger;
  
  return resultado;
}

// Para ativar o 'debugger', o código precisa ser executado.
calcularProduto(5, 10);


function calcularProduto(a, b) {
  let resultado = a * b;
  
  // Linha adicionada para inspecionar o valor
  console.log("Valor de resultado ANTES do return: " + resultado); 
  
  return resultado;
}

// O resultado da função é ignorado neste exemplo, mas a função é executada
calcularProduto(5, 10);

