import time

# --- Configurações do Login ---
SENHA_CORRETA = "1234"
TENTATIVAS_MAX = 3
TEMPO_LIMITE_SEGUNDOS = 30

# --- Variáveis de Controle ---
tentativas_restantes = TENTATIVAS_MAX
acesso_concedido = False

# Captura o tempo inicial (momento em que o usuário começa a tentar)
tempo_inicial = time.time()
tempo_decorrido = 0

print("--- SISTEMA DE LOGIN ---")
print(f"Você tem {TENTATIVAS_MAX} tentativas e {TEMPO_LIMITE_SEGUNDOS} segundos para logar.")

# O loop continua ENQUANTO houver tentativas E o tempo limite não tiver sido atingido
while tentativas_restantes > 0 and tempo_decorrido < TEMPO_LIMITE_SEGUNDOS:
    
    # 1. Calcula o tempo decorrido
    tempo_atual = time.time()
    tempo_decorrido = tempo_atual - tempo_inicial
    
    # Verifica se o tempo expirou antes de solicitar a senha
    if tempo_decorrido >= TEMPO_LIMITE_SEGUNDOS:
        break # Sai do loop se o tempo acabou

    # 2. Solicita a senha
    print(f"\nTentativa {TENTATIVAS_MAX - tentativas_restantes + 1} de {TENTATIVAS_MAX} (Tempo decorrido: {tempo_decorrido:.2f}s)")
    senha_digitada = input("Digite a senha: ")

    # 3. Verifica a senha
    if senha_digitada == SENHA_CORRETA:
        acesso_concedido = True
        break # Sai do loop em caso de sucesso
    else:
        tentativas_restantes -= 1
        
        # Informa o erro, se ainda houver tentativas
        if tentativas_restantes > 0:
            print(f"Senha incorreta! Você tem mais {tentativas_restantes} tentativa(s).")
        else:
            print("Senha incorreta. Esgotaram-se as tentativas.")
            
# --- Verificação Final e Mensagem ---

if acesso_concedido:
    print("\n--- ACESSO CONCEDIDO! Bem-vindo(a)! ---")
elif tempo_decorrido >= TEMPO_LIMITE_SEGUNDOS:
    print("\n--- ACESSO NEGADO! Tempo expirado. ---")
else: # Acesso negado por esgotar tentativas
    print("\n--- ACESSO NEGADO! Você errou a senha 3 vezes. ---")
