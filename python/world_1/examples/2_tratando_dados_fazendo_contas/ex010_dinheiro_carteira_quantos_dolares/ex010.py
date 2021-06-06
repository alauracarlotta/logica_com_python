# Crie um programa que leia quanto dinehrio uma pessoa tem na carteira e mostre quantos dolares ela pode comprar.
# Cotação do Dólar em 27/05/2021: R$ 5,24
# Cotação do Euro em 27/05/2021: R$ 6,38
# Cotação da Libra em 27/05/2021: R$ 7,43
# Cotação do Yen em 27/05/2021: R$ 0.048

money = float(input('Digite quanto dinheiro há em sua carteira: R$'))

print('Sendo a cotação do Dólar na data de hoje, 27/05/2021: R$ 5,24')
print('Sendo a cotação do Euro na data de hoje, 27/05/2021: R$ 6,38')
print('Sendo a cotação da Libra na data de hoje, 27/05/2021: R$ 7,43')
print('Sendo a cotação do Yen na data de hoje, 27/05/2021: R$ 0,048')
print('='*60)
print(f'Com R${money:.2f} reais você pode comprar ${(money/5.24):.2f} dólares!')
print(f'Poderá comprar também €{(money/6.38):.2f} euros, £{(money/7.43):.2f} Libras e ¥{(money/0.048):.2f} Ienes!')
