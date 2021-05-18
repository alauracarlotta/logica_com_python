# ---------- EX ---------- #

userName = input("Qual o seu nome? ")
userBirthDay = input("Qual dia do nascimento? ")
userBirthMonth = input("Qual o mês do seu nascimento? ")
userBirthYear = int(input("Qual o ano do seu nascimento? "))
anoAtual = int(input("Em que ano nós estamos? "))

# ======= DESAFIO 1 ======= #
print(f"Olá, {userName}! Seja bem vinda(o)!")

# ======= DESAFIO 2 ======= #
print(f"Você nasceu no dia {userBirthDay} de {userBirthMonth} de {userBirthYear}. Ou seja: Você tem {anoAtual - userBirthYear} anos de idade.")

# ======= DESAFIO 3 ======= #
number1 = int(input("Digite um número: "))
number2 = int(input("Digite o segundo número: "))

print(f"A soma entre {number1} e {number2} é {number1+number2}!")
