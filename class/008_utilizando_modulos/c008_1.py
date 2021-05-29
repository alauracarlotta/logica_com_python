import math # Assim precisa colocar o nome da biblioteca na frente

number = int(input('Digite um número: '))
sqrtNumber = math.sqrt(number)

print(f'A raiz de {number} é igual a {sqrtNumber:.2f} ou ')
print(f'A raiz de {number} é igual a {math.floor(sqrtNumber)} arredondando pra baixo ou')
print(f'A raiz de {number} é igual a {math.ceil(sqrtNumber)} arredondando pra cima ou ')
print(f'A raiz de {number} é igual a {math.trunc(sqrtNumber)} ignorando absolutamente tudo o que está depois da vírgula!')
