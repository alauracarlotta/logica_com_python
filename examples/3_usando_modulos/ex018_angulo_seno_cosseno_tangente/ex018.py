# Faça um programa que leia um angulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo.

from math import cos, sin, tan

angle = int(input('Digite o valor do ângulo a ser calculado seno, cosseno e tangente: '))
print(f'O seno de {angle}° é = {sin(angle)}')
print(f'O cosseno de {angle}° é = {cos(angle)}')
print(f'A tangente de {angle}° é = {tan(angle)}')
