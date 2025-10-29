/**
 * SISTEMA SIMPLES DE CADASTRO DE CLIENTES EM JAVASCRIPT
 *
 * Utiliza Array (Lista), Set (Conjunto) e Map (Mapa) para registrar
 * 10 entradas de dados, conforme as regras de cada estrutura.
 *
 * NOTA: Este código deve ser executado no console de um navegador
 * (pressione F12) ou em um ambiente que suporte a função prompt().
 */

// --- 1. Estruturas de Dados ---
const listaNomes = [];  // Array (Lista): Permite nomes duplicados.
const conjuntoEmails = new Set(); // Set (Conjunto): Garante e-mails únicos.
const mapaTelefones = new Map();  // Map (Mapa): Associa ID (chave) a Telefone (valor).

const QUANTIDADE = 10;

// --- 2. Função Auxiliar para Solicitar Entrada e Validar Não-Vazio ---
function solicitarEntrada(mensagem) {
    let entrada = "";
    // Loop para garantir que a entrada não seja vazia ou "cancelada" (null)
    while (entrada === null || entrada.trim() === "") {
        entrada = prompt(mensagem);
        if (entrada === null) {
            // Se o usuário clicar em Cancelar, retorna uma string que indica cancelamento
            return "[Dado Omitido/Cancelado]";
        }
    }
    return entrada.trim();
}

// --- 3. Cadastro dos Elementos ---

// A. Cadastro da Lista de Nomes (Array)
console.log("=================================================");
console.log("--- INÍCIO DO CADASTRO: 10 Nomes para a Lista ---");
for (let i = 0; i < QUANTIDADE; i++) {
    const nome = solicitarEntrada(`[NOME ${i + 1}/${QUANTIDADE}] Digite o nome do cliente:`);
    listaNomes.push(nome);
}

// B. Cadastro do Conjunto de E-mails (Set)
console.log("\n--- INÍCIO DO CADASTRO: 10 E-mails (Apenas e-mails ÚNICOS serão guardados) ---");
for (let i = 0; i < QUANTIDADE; i++) {
    const email = solicitarEntrada(`[E-MAIL ${i + 1}/${QUANTIDADE}] Digite o e-mail do cliente:`);
    // O método .add() do Set insere apenas se o valor ainda não existir.
    conjuntoEmails.add(email);
}

// C. Cadastro do Mapa de ID e Telefone (Map)
console.log("\n--- INÍCIO DO CADASTRO: 10 Pares de ID (Chave) e Telefone (Valor) ---");
for (let i = 0; i < QUANTIDADE; i++) {
    let id;
    let telefone;

    console.log(`\n[PAR ${i + 1}/${QUANTIDADE}]`);

    // 1. Solicita e valida o ID (chave do Mapa)
    do {
        id = solicitarEntrada(`ID do Cliente (Chave ÚNICA) - Sugestão: ${i + 101}`);
        // Verifica se o ID já existe no mapa
        if (mapaTelefones.has(id)) {
            alert(`O ID "${id}" já está em uso. Por favor, use um ID único.`);
            id = null; // Força a repetição
        }
    } while (id === null);

    // 2. Solicita o Telefone (valor do Mapa)
    telefone = solicitarEntrada("Telefone do Cliente (Valor):");

    // Adiciona o par ID-Telefone ao Mapa
    mapaTelefones.set(id, telefone);
}

console.log("\n--- FIM DO CADASTRO ---");
console.log("=================================================");


// --- 4. Exibição Organizada dos Dados ---

// A. Exibição da Lista de Nomes (Array)
console.log("\n✅ Lista de Nomes Cadastrados: (Total de " + listaNomes.length + " nomes)");
listaNomes.forEach((nome, indice) => {
    // Exibe o índice (posição) e o valor
    console.log(`- Cliente ${indice + 1}: ${nome}`);
});

console.log("-------------------------------------------------");

// B. Exibição do Conjunto de E-mails (Set)
console.log("\n✅ Conjunto de E-mails Únicos: (Total de " + conjuntoEmails.size + " e-mails)");
let contadorEmail = 1;
// Itera sobre os valores do Set (apenas os únicos)
for (const email of conjuntoEmails) {
    console.log(`- E-mail ${contadorEmail}: ${email}`);
    contadorEmail++;
}

console.log("-------------------------------------------------");

// C. Exibição do Mapa de Telefones por ID (Map)
console.log("\n✅ Mapa de Telefones por ID: (Total de " + mapaTelefones.size + " pares ID/Telefone)");
let contadorMap = 1;
// Itera sobre o Map, que fornece a chave (ID) e o valor (Telefone)
mapaTelefones.forEach((telefone, id) => {
    console.log(`- Par ${contadorMap}: ID [${id}] -> Telefone [${telefone}]`);
    contadorMap++;
});

console.log("\n=================================================");
console.log("Sistema de Registro de Clientes concluído!");
