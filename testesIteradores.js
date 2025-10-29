/**
 * Programa em JavaScript para enviar mensagens de agradecimento
 * a clientes usando o iterador for...of.
 */

// REQUISITO 1: Crie um array chamado clientes com pelo menos 5 nomes fictícios.
const clientes = [
    "Ana Silva",
    "Bruno Mendes",
    "Carla Oliveira",
    "David Santos",
    "Erica Costa"
];

console.log("--- INICIANDO PROCESSO DE ENVIO DE MENSAGENS ---");

// REQUISITO 2 e 3: Use um loop for...of para percorrer o array
// e exiba a mensagem personalizada no console.
for (const nome of clientes) {
    // Para cada nome, exiba a mensagem: "Enviando e-mail de agradecimento para [nome]."
    console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}

console.log("--- PROCESSO DE ENVIO CONCLUÍDO ---");


/**
 * Programa em JavaScript para filtrar e exibir clientes
 * que compraram nos últimos 30 dias usando forEach.
 */

// 1. Definição da Data Limite
// ==========================================================

// Obtém a data e hora atuais em milissegundos (timestamp)
const dataAtualMs = new Date().getTime();

// Define o período de 30 dias em milissegundos.
// (1000 ms/seg * 60 seg/min * 60 min/hora * 24 horas/dia * 30 dias)
const trintaDiasEmMs = 1000 * 60 * 60 * 24 * 30;

// Calcula a data limite: 30 dias atrás, em milissegundos.
const dataLimiteMs = dataAtualMs - trintaDiasEmMs;

// Opcional: para exibição no console
console.log(`Data de hoje (em MS): ${dataAtualMs}`);
console.log(`Data limite (30 dias atrás em MS): ${dataLimiteMs}`);
console.log(`---`);


// 2. Lista de Compras (REQUISITO: Mínimo 10 registros)
// ==========================================================
const listaDeCompras = [
    { nome: "Mariana S.", dataCompra: "2025-10-28" }, // 1 dia atrás (RECIENTE)
    { nome: "João V.", dataCompra: "2025-09-29" },   // 30 dias atrás (RECIENTE)
    { nome: "Pedro A.", dataCompra: "2025-10-15" },   // 14 dias atrás (RECIENTE)
    { nome: "Lucas F.", dataCompra: "2025-08-01" },   // Antigo (FORA DO PRAZO)
    { nome: "Sofia M.", dataCompra: "2025-10-05" },   // 24 dias atrás (RECIENTE)
    { nome: "André C.", dataCompra: "2025-09-20" },   // 39 dias atrás (FORA DO PRAZO)
    { nome: "Helena P.", dataCompra: "2025-10-25" },  // 4 dias atrás (RECIENTE)
    { nome: "Ricardo R.", dataCompra: "2025-10-01" },  // 28 dias atrás (RECIENTE)
    { nome: "Julia G.", dataCompra: "2025-07-10" },   // Antigo (FORA DO PRAZO)
    { nome: "Felipe L.", dataCompra: "2025-10-10" }    // 19 dias atrás (RECIENTE)
];


/**
 * Programa em JavaScript para remover duplicados usando o objeto Set
 * e iterar sobre os nomes únicos com for...of.
 */

// 1. Lista de Nomes com Duplicatas
// ==========================================================
const listaComDuplicatas = [
    "Ana",
    "Bruno",
    "Carla",
    "Ana",        // Duplicado
    "David",
    "Carla",      // Duplicado
    "Erica",
    "Felipe",
    "Bruno",      // Duplicado
    "Mariana",
    "David"       // Duplicado
];

console.log("--- LISTA ORIGINAL (COM DUPLICATAS) ---");
console.log(listaComDuplicatas);
console.log(`Total de itens na lista original: ${listaComDuplicatas.length}`);
console.log("---------------------------------------");


// 2. Remoção de Duplicatas Usando o Objeto Set
// ==========================================================

// O objeto Set armazena apenas valores únicos. 
// Ao passarmos o array 'listaComDuplicatas' para o construtor do Set,
// ele automaticamente remove todos os nomes repetidos.
const nomesUnicos = new Set(listaComDuplicatas);


// 3. Iteração e Exibição com for...of
// ==========================================================

console.log("--- NOMES ÚNICOS (ITERAÇÃO COM for...of) ---");

// O Set é um iterável, o que significa que podemos usar o for...of
// diretamente sobre ele para percorrer os nomes únicos.
let contador = 0;
for (const nome of nomesUnicos) {
    contador++;
    console.log(`${contador}. Nome único encontrado: ${nome}`);
}

console.log("---------------------------------------");
console.log(`Total de nomes únicos: ${nomesUnicos.size}`);
