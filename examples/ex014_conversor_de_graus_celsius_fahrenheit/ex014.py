# Faça um programa que solicte ao usuário um valor de graus Celsius e mostre a ele o valor em graus Fahrenheit.

celsius = float(input('Qual valor em graus Celsius você quer converter? '))

print(f'{celsius:.1f}°C convertido para graus Fahrenheit ficam {(celsius*1.8+32):.1f}°F')
print(f'{celsius:.1f}°C convertido para graus Kelvin ficam {(celsius+273.15):.2f}°K')
