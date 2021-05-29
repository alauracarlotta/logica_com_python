from math import cos, sin, tan, pi

angle = int(input('Digite o valor do ângulo a ser calculado seno, cosseno e tangente: '))
radians = angle * pi / 180

print(f'O seno de {angle}° é = {sin(radians):.3f}')
print(f'O cosseno de {angle}° é = {cos(radians):.3f}')
print(f'A tangente de {angle}° é = {tan(radians):.3f}')