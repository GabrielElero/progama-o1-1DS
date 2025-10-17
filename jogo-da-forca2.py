import random

# --- 1. CONFIGURAÇÃO VISUAL DA FORCA ---
# Lista de desenhos que representam o boneco sendo montado.
# O índice [0] é o estado inicial (completo), e o último índice é o boneco completo.
FORCA_DESENHOS = [
    # 0 erros (Tentativas = 6)
    """
       _______
      |/      |
      |      
      |      
      |      
      |     
      |
    __|__
    """,
    # 1 erro (Tentativas = 5)
    """
       _______
      |/      |
      |      ( )
      |      
      |      
      |     
      |
    __|__
    """,
    # 2 erros (Tentativas = 4)
    """
       _______
      |/      |
      |      ( )
      |       |
      |       |
      |     
      |
    __|__
    """,
    # 3 erros (Tentativas = 3)
    """
       _______
      |/      |
      |      ( )
      |      \|
      |       |
      |     
      |
    __|__
    """,
    # 4 erros (Tentativas = 2)
    """
       _______
      |/      |
      |      ( )
      |      \|/
      |       |
      |     
      |
    __|__
    """,
    # 5 erros (Tentativas = 1)
    """
       _______
      |/      |
      |      ( )
      |      \|/
      |       |
      |      / 
      |
    __|__
    """,
    # 6 erros (Tentativas = 0) - FIM DE JOGO
    """
       _______
      |/      |
      |      (x)
      |      \|/
      |       |
      |      / \\
      |
    __|__
    """
]

# Lista de palavras para o jogo
PALAVRAS = ['PYTHON', 'PROGRAMACAO', 'ALGORITMO', 'DESAFIO', 'CONDICAO', 'FORCA']

# --- 2. CONFIGURAÇÃO E INÍCIO DO JOGO ---

# Escolhe a palavra, garante que seja em maiúsculas
palavra_secreta = random.choice(PALAVRAS).upper()
letras_descobertas = ['_'] * len(palavra_secreta)
letras_tentadas = set() # Usamos um set para evitar duplicatas e acelerar a busca
tentativas_restantes = len(FORCA_DESENHOS) - 1 # 6 tentativas (índices 0 a 6)
acertou_palavra = False

print("--- JOGO DA FORCA MELHORADO ---")
print(f"A palavra tem {len(palavra_secreta)} letras.")

# --- 3. LOOP PRINCIPAL DO JOGO ---

# O loop continua enquanto houver tentativas E a palavra não tiver sido descoberta
while tentativas_restantes > 0 and not acertou_palavra:
    
    # 3.1 EXIBE O ESTADO ATUAL
    
    # Índice do desenho da forca: 
    # Calculado pelo número total de erros (6 - tentativas_restantes)
    erros_cometidos = (len(FORCA_DESENHOS) - 1) - tentativas_restantes
    print(FORCA_DESENHOS[erros_cometidos])
    
    print("\nPalavra: ", " ".join(letras_descobertas))
    print(f"Tentativas restantes: {tentativas_restantes}")
    print(f"Letras já usadas: {', '.join(sorted(list(letras_tentadas)))}")

    # 3.2 SOLICITA A ENTRADA
    letra = input("\nDigite uma letra (ou 'sair' para desistir): ").upper()

    # --- Controle de Fluxo (Desistência) ---
    if letra == 'SAIR':
        print("\nVocê desistiu do jogo.")
        break

    # --- Controle de Fluxo (Entrada Inválida) ---
    if not letra.isalpha() or len(letra) != 1:
        print("Entrada inválida. Digite apenas uma letra.")
        continue # Pula para o próximo ciclo do loop

    # --- Controle de Fluxo (Letra Repetida) ---
    if letra in letras_tentadas:
        print(f"Você JÁ tentou a letra '{letra}'.")
        continue

    # Adiciona a letra às tentadas (para controle futuro)
    letras_tentadas.add(letra)
    
    # 3.3 PROCESSAMENTO DA TENTATIVA
    
    if letra in palavra_secreta:
        print(f"CORRETO! A letra '{letra}' está na palavra.")
        # Atualiza a palavra descoberta
        for i, char in enumerate(palavra_secreta):
            if char == letra:
                letras_descobertas[i] = letra
        
        # Verifica se todas as letras foram encontradas
        if "_" not in letras_descobertas:
            acertou_palavra = True
            
    else:
        print(f"ERRADO! A letra '{letra}' não está na palavra.")
        tentativas_restantes -= 1
        
# --- 4. RESULTADO FINAL DO JOGO ---

print("\n" + "="*30)
if acertou_palavra:
    print("PARABÉNS! VOCÊ VENCEU O JOGO DA FORCA!")
    print("A palavra era:", palavra_secreta)
elif tentativas_restantes == 0:
    # Mostra o boneco final quando o jogo é perdido por esgotar as tentativas
    print(FORCA_DESENHOS[-1]) 
    print("FIM DE JOGO! O ENFORCADO NÃO RESISTIU.")
    print("A palavra era:", palavra_secreta)
else:
    # Desistência (break pelo 'sair')
    print("Jogo encerrado a pedido do jogador.")
