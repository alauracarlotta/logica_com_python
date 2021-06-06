from math import sqrt, floor # Assim não precisa acrescentar o math(ou seja, a biblioteca) na frente!

number = int(input('Digite um número: '))
sqrtNumber = sqrt(number)

print(f'A raiz de {number} é igual a {sqrtNumber:.2f} ou ')
print(f'A raiz de {number} é igual a {floor(sqrtNumber)} arredondando pra baixo')
