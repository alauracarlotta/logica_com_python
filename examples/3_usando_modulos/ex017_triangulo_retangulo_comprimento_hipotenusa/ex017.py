# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triangulo retangulo, calcule e mostre o comprimento da hipotenusa.

import math

oppositeSide = float(input('Qual é o valor do cateto oposto? '))
adjacentLeg = float(input('Qual é o valor do cateto adjacente? '))

print(f'Com valor de cateto oposto sendo {oppositeSide:.2f} e cateto adjacente sendo {adjacentLeg:.2f}, o valor da hipotenusa desse triangulo é {(math.hypot(oppositeSide, adjacentLeg)):.2f}.')
