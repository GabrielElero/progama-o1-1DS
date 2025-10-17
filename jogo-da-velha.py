def criar_tabuleiro():
    return [[" " for _ in range(3)] for _ in range(3)]

def mostrar_tabuleiro(tabuleiro):
    print("\nTabuleiro:")
    for i in range(3):
        for j in range(3):
            print(f" {tabuleiro[i][j]} ", end="")
            if j < 2:
                print("|", end="")
        print()
        if i < 2:
            print("---+---+---")

def verificar_vitoria(tabuleiro, jogador):
    # Verificar linhas
    for linha in tabuleiro:
        if all(pos == jogador for pos in linha):
            return True
    # Verificar colunas
    for col in range(3):
        if all(tabuleiro[linha][col] == jogador for linha in range(3)):
            return True
    # Verificar diagonais
    if all(tabuleiro[i][i] == jogador for i in range(3)):
        return True
    if all(tabuleiro[i][2 - i] == jogador for i in range(3)):
        return True
    return False

def verificar_empate(tabuleiro):
    for linha in tabuleiro:
        if " " in linha:
            return False
    return True

def pedir_jogada(jogador, tabuleiro):
    while True:
        try:
            linha = int(input(f"Jogador {jogador}, digite a linha (0, 1 ou 2): "))
            coluna = int(input(f"Jogador {jogador}, digite a coluna (0, 1 ou 2): "))
            if linha not in [0,1,2] or coluna not in [0,1,2]:
                print("Linha e coluna devem ser 0, 1 ou 2. Tente novamente.")
                continue
            if tabuleiro[linha][coluna] != " ":
                print("Posição já ocupada! Escolha outra.")
                continue
            return linha, coluna
        except ValueError:
            print("Entrada inválida! Digite números inteiros.")

def jogo_da_velha():
    tabuleiro = criar_tabuleiro()
    jogador_atual = "X"

    while True:
        mostrar_tabuleiro(tabuleiro)
        linha, coluna = pedir_jogada(jogador_atual, tabuleiro)
        tabuleiro[linha][coluna] = jogador_atual

        if verificar_vitoria(tabuleiro, jogador_atual):
            mostrar_tabuleiro(tabuleiro)
            print(f"Parabéns! Jogador {jogador_atual} venceu!")
            break

        if verificar_empate(tabuleiro):
            mostrar_tabuleiro(tabuleiro)
            print("Empate! O tabuleiro está cheio e ninguém venceu.")
            break

        # Alterna jogador
        jogador_atual = "O" if jogador_atual == "X" else "X"

if __name__ == "__main__":
    jogo_da_velha()
