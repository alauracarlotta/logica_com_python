# Crie um programa que leia quanto dinehrio uma pessoa tem na carteira e mostre quantos dolares ela pode comprar.
# Cotação do dolar em 27/05/2021: R$ 5,24.

money = float(input('Digite quanto dinheiro há em sua carteira: '))

print(f'Com R${money:.2f} reais você pode comprar ${(money/5.24):.2f} dólares!')
