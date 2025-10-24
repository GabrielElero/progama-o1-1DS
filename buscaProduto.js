/**
 * Busca um produto em uma lista pelo nome.
 * * @param {Array<Object>} produtos - Uma lista de objetos produto, cada um com 'nome' e 'preco'.
 * @param {string} nomeBusca - O nome do produto a ser buscado.
 * @returns {Object | null} O objeto do produto encontrado ou null se não for encontrado.
 */
function buscarProduto(produtos, nomeBusca) {
    // Itera sobre cada produto na lista
    for (let i = 0; i < produtos.length; i++) {
        const produtoAtual = produtos[i];
        
        // Compara o nome do produto atual com o nome de busca
        // Para uma busca mais robusta que ignora maiúsculas/minúsculas, 
        // poderíamos usar: produtoAtual.nome.toLowerCase() === nomeBusca.toLowerCase()
        if (produtoAtual.nome === nomeBusca) {
            // Se o produto for encontrado, retorna o objeto completo
            return produtoAtual;
        }
    }
    
    // Se o loop terminar sem encontrar o produto, retorna null
    return null;
}

// ------------------------------------
// EXEMPLO DE USO
// ------------------------------------

// 1. Criando a lista de produtos
const listaProdutos = [
    { nome: "Notebook", preco: 4500.00 },
    { nome: "Mouse", preco: 75.50 },
    { nome: "Teclado Mecânico", preco: 350.99 },
    { nome: "Monitor 27 Polegadas", preco: 1800.00 }
];

// 2. Teste 1: Buscar um produto que existe
const nomeParaBuscar1 = "Mouse";
const produtoEncontrado1 = buscarProduto(listaProdutos, nomeParaBuscar1);

console.log(`Buscando por: "${nomeParaBuscar1}"`);
if (produtoEncontrado1) {
    console.log("Produto encontrado:", produtoEncontrado1);
} else {
    console.log("Produto não encontrado.");
}
// Saída esperada: Produto encontrado: { nome: 'Mouse', preco: 75.5 }

console.log("------------------------------------");

// 3. Teste 2: Buscar um produto que não existe
const nomeParaBuscar2 = "Webcam HD";
const produtoEncontrado2 = buscarProduto(listaProdutos, nomeParaBuscar2);

console.log(`Buscando por: "${nomeParaBuscar2}"`);
if (produtoEncontrado2) {
    console.log("Produto encontrado:", produtoEncontrado2);
} else {
    console.log("Produto não encontrado.");
}
// Saída esperada: Produto não encontrado.
