# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triangulo retangulo, calcule e mostre o comprimento da hipotenusa.

from math import hypot, pow, sqrt

oppositeSide = float(input('Qual é o valor do cateto oposto? '))
adjacentLeg = float(input('Qual é o valor do cateto adjacente? '))

print(f'Com valor de cateto oposto sendo {oppositeSide:.2f} e cateto adjacente sendo {adjacentLeg:.2f}, o valor da hipotenusa desse triangulo é {(hypot(oppositeSide, adjacentLeg)):.2f}.')
print(f'VEJA A RESPOSTA: ')
print(f'a² = b² + c² ')
print(f'a² = {oppositeSide}² + {adjacentLeg}² ')
print(f'a² = {pow(oppositeSide, 2)} + {pow(adjacentLeg, 2)}')
print(f'a² = {pow(oppositeSide, 2) + pow(adjacentLeg, 2)}')
print(f'a = √{sqrt(pow(oppositeSide, 2) + pow(adjacentLeg, 2)):.2f}')