# Desenvolva um programa que leia o comprimento de 3 retas e diga ao usuário se eleas podem ou não formar um triângulo.

print("-=-" * 20)
print("Analisador de Triângulos")
print("-=-" * 20)

r1 = float(input("1ª reta: "))
r2 = float(input("2ª reta: "))
r3 = float(input("3ª reta: "))

if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('Os seguimentos acima PODEM FORMAR UM TRIÂNGULO!')

else:
    print('Com esses valores é IMPOSSÍVEL construir um triângulo!')
