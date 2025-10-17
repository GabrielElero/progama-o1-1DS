# Lista dos dias úteis
dias_uteis = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]

print("Contagem regressiva para o fim de semana:")

# O loop 'for' percorre cada item na lista 'dias_uteis'
for dia in dias_uteis:
    # A cada iteração, o nome do dia é impresso
    print(f"Hoje é {dia}. Um dia a menos para o fim de semana!")

# Mensagem final após o loop
print("\nChegamos! O fim de semana está aqui!")


# Lista de preços dos itens da compra
precos = [2.50, 15.75, 5.99, 1.20, 10.00, 3.80]

# Variável para armazenar a soma total, inicializada em zero
total = 0

print("Calculando o total da lista de compras...")

# O loop 'for' percorre cada preço na lista 'precos'
for preco_item in precos:
    # Adiciona o preço do item atual ao total
    total = total + preco_item
    # ou, de forma abreviada: total += preco_item
    
    # (Opcional) Imprime o cálculo parcial para acompanhamento
    print(f"Adicionando R$ {preco_item:.2f}. Total parcial: R$ {total:.2f}")

# Imprime o resultado final
print(f"\nO valor total da compra é: R$ {total:.2f}")


# Variável que simula o número de mensagens não lidas
mensagens_nao_lidas = 5

print(f"Você tem {mensagens_nao_lidas} mensagens novas.")
print("Iniciando a leitura das mensagens...\n")

# O loop 'while' continua enquanto a condição for VERDADEIRA (ou seja, enquanto o número de mensagens for maior que zero)
while mensagens_nao_lidas > 0:
    
    # 1. Processa a mensagem atual (simulando a leitura)
    print(f"Lendo a mensagem {6 - mensagens_nao_lidas}...")
    
    # 2. Diminui o contador de mensagens não lidas (mudando a condição de parada)
    mensagens_nao_lidas = mensagens_nao_lidas - 1
    # ou, de forma abreviada: mensagens_nao_lidas -= 1
    
    # 3. Informa o status após a leitura
    if mensagens_nao_lidas > 0:
        print(f"Você ainda tem {mensagens_nao_lidas} mensagens não lidas.\n")
    else:
        print("\nPronto!")

# Mensagem final após o loop (quando a condição 'mensagens_nao_lidas > 0' se torna FALSA)
print("Sua caixa de entrada está limpa. Você leu todas as mensagens!")


# Definindo as variáveis iniciais
meta_valor = 100.00         # Valor total que se deseja alcançar (R$ 100)
economia_semanal = 10.00    # Valor economizado a cada semana (R$ 10)
valor_acumulado = 0.00      # Valor economizado até o momento (começa em R$ 0)
semanas = 0                 # Contador de semanas (começa em 0)

print(f"Meta de economia: R$ {meta_valor:.2f}")
print(f"Economia por semana: R$ {economia_semanal:.2f}\n")

# O loop 'while' continua enquanto o valor acumulado for MENOR que a meta
while valor_acumulado < meta_valor:
    
    # 1. Incrementa o número de semanas
    semanas += 1  # É o mesmo que semanas = semanas + 1
    
    # 2. Adiciona a economia da semana ao valor acumulado
    valor_acumulado += economia_semanal  # É o mesmo que valor_acumulado = valor_acumulado + economia_semanal
    
    # Imprime o progresso
    print(f"Semana {semanas}: Valor acumulado: R$ {valor_acumulado:.2f}")

# Mensagem final após o loop (a meta foi atingida ou superada)
print(f"\nParabéns! Você alcançou a meta de R$ {meta_valor:.2f} em {semanas} semanas!")


# Lista de alunos na sala de aula
lista_de_presenca = ["Ana", "Bruno", "Carla", "Daniel", "Ester", "Fábio", "Gustavo"]

# Nome que o professor deseja buscar
nome_procurado = "Carla"

# Variável de controle (flag) para indicar se o nome foi encontrado
encontrado = False

print(f"Buscando o nome '{nome_procurado}' na lista de presença...\n")

# O loop 'for' percorre cada nome na lista
for aluno in lista_de_presenca:
    
    # A estrutura 'if' verifica se o nome do aluno atual é o nome procurado
    if aluno == nome_procurado:
        print(f"Sucesso! O aluno '{nome_procurado}' foi encontrado na lista.")
        encontrado = True
        # Usamos 'break' para sair do loop imediatamente, já que encontramos o que procuramos
        break
    
    # (Opcional) Mostra a tentativa
    print(f"Verificando {aluno}... Não é o nome procurado.")

# Verifica a flag 'encontrado' após o loop para dar uma mensagem final
if not encontrado:
    print(f"\nO aluno '{nome_procurado}' não está na lista de presença.")
