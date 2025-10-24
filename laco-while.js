// Desafio 1: Medir o tamanho da palavra
let palavra;

// Solicita a palavra pela primeira vez (pode ser necessário em alguns ambientes)
palavra = prompt("Digite uma palavra:");

// Laço WHILE: Repete enquanto o tamanho da palavra for menor ou igual a 8
while (palavra.length <= 8) {
    palavra = prompt(`A palavra "${palavra}" tem ${palavra.length} letras. Digite uma palavra com MAIS de 8 letras:`);
}

console.log(`Palavra aceita: "${palavra}" (tamanho: ${palavra.length} letras)`);


// Desafio 2: Acumular valores imprevisíveis
let soma = 0;
let numeroGerado = 0;
let contagem = 0;

// Laço WHILE: Repete enquanto a soma for menor ou igual a 500
while (soma <= 500) {
    // Gera um número aleatório entre 1 e 100 (ajuste conforme necessário)
    numeroGerado = Math.floor(Math.random() * 100) + 1; 
    
    // Acumula a soma
    soma += numeroGerado;
    contagem++; // Conta quantas vezes gerou um número
    
    console.log(`[${contagem}] Gerado: ${numeroGerado}. Soma atual: ${soma}`);
}

console.log(`\nSoma final (${soma}) ultrapassou 500 após ${contagem} gerações.`);


// Desafio 3: Verificar se um número está dentro de uma faixa indicada
let tamanho;

// Solicita o tamanho do calçado
tamanho = parseInt(prompt("Digite o tamanho do seu calçado (entre 34 e 44):"));

// Laço WHILE: Repete enquanto o número for inválido:
// 1. Não é um número (isNaN)
// 2. É menor que 34
// 3. É maior que 44
while (isNaN(tamanho) || tamanho < 34 || tamanho > 44) {
    tamanho = parseInt(prompt(`Tamanho inválido (${tamanho}). Digite um número ENTRE 34 e 44:`));
}

console.log(`Tamanho de calçado aceito: ${tamanho}`);


// Desafio 4: Testar múltiplas condições (Múltiplo de 3 E 5)
let numero = 0;
let contagem = 0;

// Laço WHILE: Repete enquanto o número não for múltiplo de 3 OU não for múltiplo de 5
// Múltiplo de 3: (numero % 3 !== 0)
// Múltiplo de 5: (numero % 5 !== 0)
// O || (OR) garante que o loop pare SOMENTE quando AMBAS as condições forem falsas (ou seja, quando for múltiplo de 3 E 5)
while (numero % 3 !== 0 || numero % 5 !== 0 || numero === 0) {
    // Gera um número aleatório entre 1 e 100
    numero = Math.floor(Math.random() * 100) + 1;
    contagem++;
    console.log(`[${contagem}] Gerado: ${numero}`);
}

console.log(`\nNúmero encontrado que é múltiplo de 3 e 5: ${numero} (após ${contagem} tentativas)`);


// Desafio 5: Verificar faixa etária
let idade;

// Solicita a idade pela primeira vez
idade = parseInt(prompt("Digite sua idade (entre 18 e 60):"));

// Laço WHILE: Repete enquanto a idade for inválida:
// 1. Não é um número (isNaN)
// 2. É menor que 18
// 3. É maior que 60
while (isNaN(idade) || idade < 18 || idade > 60) {
    idade = parseInt(prompt(`Idade inválida (${idade}). Digite uma idade ENTRE 18 e 60:`));
}

console.log(`Idade aceita: ${idade} anos.`);


// Desafio 6: Verificar presença de caracteres (Letra e Número)
let senha;

// Expressões Regulares (RegExp) para validação:
// 1. Deve conter pelo menos UMA letra (maiuscula ou minuscula): /[a-zA-Z]/
const temLetra = /[a-zA-Z]/;
// 2. Deve conter pelo menos UM número (0 a 9): /[0-9]/
const temNumero = /[0-9]/;

// Laço WHILE: Repete enquanto a senha NÃO tiver letra OU NÃO tiver número
// O método test() de RegExp retorna true se a string corresponder ao padrão
do {
    senha = prompt("Digite uma senha (deve ter pelo menos 1 letra e 1 número):");

    // Verifica as condições de validade
    if (!temLetra.test(senha)) {
        console.log("Atenção: A senha deve conter pelo menos uma letra.");
    }
    if (!temNumero.test(senha)) {
        console.log("Atenção: A senha deve conter pelo menos um número.");
    }

// A condição do WHILE é a NEGAÇÃO da lógica aplicada:
// Repete se: (NÃO tem letra) OU (NÃO tem número)
} while (!temLetra.test(senha) || !temNumero.test(senha)); 
// Nota: Usamos 'do...while' aqui para garantir que a solicitação do 'prompt' seja executada pelo menos uma vez, 
// o que é uma prática comum para validação de entrada de usuário.

console.log("Senha aceita!");
