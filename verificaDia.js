// Verificador do Dia da Semana com entrada via teclado no Node.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o dia da semana: ", function(dia) {
    // Normaliza o texto (ex: 'domingo' → 'Domingo')
    dia = dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();

    if (dia === "Sábado" || dia === "Domingo") {
        console.log("É final de semana!");
    } else if (
        dia === "Segunda" ||
        dia === "Terça" ||
        dia === "Quarta" ||
        dia === "Quinta" ||
        dia === "Sexta"
    ) {
        console.log("É dia de semana.");
    } else {
        console.log("Dia inválido. Tente novamente.");
    }

    rl.close();
});
