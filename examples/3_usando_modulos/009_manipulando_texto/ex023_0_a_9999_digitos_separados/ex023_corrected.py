number = int(input('Digite um numero entre 0 e 9999: '))
u = number // 1 % 10
te = number // 10 % 10
h = number // 100 % 10
th = number // 1000 % 10

print(f'Analisando o número {number}: ')
print(f'Unidade: {u}')
print(f'Dezena: {te}')
print(f'Centena: {h}')
print(f'Milhar: {th}')
