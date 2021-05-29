# Crie um programa que leia um numero Real qualquer pelo teclado e mostre na tela a sua porção inteira.
# Ex: 'Digite um número: 6.127'
# 'O número 6.127 tem a sua parte inteira 6'.

from math import trunc

number = float(input('Digite um número real qualquer: '))

print(f'O número {number} tem a sua parte inteira {trunc(number)}.')
