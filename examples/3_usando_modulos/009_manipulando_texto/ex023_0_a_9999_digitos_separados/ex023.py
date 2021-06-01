# Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos digitos separados.
# Ex: 1834

# unidade: 4
# dezena: 3
# centena: 8
# milhar: 1

# Podemos fazer matematicamente falando ou como strings

numbers = input('Digite um numero de 0 a 9999: ')

print(f'Unidades: {numbers[3]}')
print(f'Dezenas: {numbers[2]}')
print(f'Centenas: {numbers[1]}')
print(f'Milhar: {numbers[0]}')
