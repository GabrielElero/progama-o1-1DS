let avaliacao = 8.5; // Ex. de nota, pode ser qualquer valor de 0.00 a 10.00

if (avaliacao >= 8.0) { // Incluir a nota de aprovação e usar o operador de comparação >=
  console.log("Você está aprovado. Parabéns!");
} else {
  console.log("Infelizmente você não foi selecionado."); // O comando deve ser 'console.log', e a mensagem é a da última condição (reprovação)
}

// Se você alterar 'avaliacao' para um valor como 7.9, a saída será a mensagem de 'else'.
