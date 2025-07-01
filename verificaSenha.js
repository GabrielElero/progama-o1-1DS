// Verificador de Senha Simples

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const senha_correta = "12345"; // Senha definida no sistema

rl.question("Digite a senha: ", function(senha_digitada) {
    if (senha_digitada === senha_correta) {
        console.log("Login bem-sucedido!");
    } else {
        console.log("Senha incorreta. Tente novamente.");
    }

    rl.close();
});
