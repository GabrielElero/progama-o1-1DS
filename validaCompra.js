// Validação de Compra Simples

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo_disponivel = 100;

rl.question("Digite o valor da compra: ", function(input) {
    let valor_compra = parseFloat(input);

    if (saldo_disponivel >= valor_compra) {
        let novo_saldo = saldo_disponivel - valor_compra;
        console.log("Compra aprovada! Seu novo saldo é: R$ " + novo_saldo.toFixed(2));
    } else {
        console.log("Saldo insuficiente. A compra não pode ser realizada.");
    }

    rl.close();
});
