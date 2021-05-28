# faça um algoritmo que leia o preço de um produto e mostre seu novo preço  com 5% de desconto.

price = float(input('Digite o preço atual: R$'))

print(f'O preço atual do produto é R$ {price:.2f} reais!')
print(f'O valor da mercadoria com 5% de desconto é R$ {(price - (price*5/100)):.2f} reais!')
print(f'Boa compras!')
