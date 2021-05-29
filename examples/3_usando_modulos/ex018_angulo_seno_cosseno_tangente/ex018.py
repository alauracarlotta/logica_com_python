# Faça um programa que leia um angulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo.

from math import cos, sin, tan, radians

angle = int(input('Digite o valor do ângulo a ser calculado seno, cosseno e tangente: '))
print(f'O seno de {angle}° é = {sin(radians(angle)):.3f}')
print(f'O cosseno de {angle}° é = {cos(radians(angle)):.3f}')
print(f'A tangente de {angle}° é = {tan(radians(angle)):.3f}')
