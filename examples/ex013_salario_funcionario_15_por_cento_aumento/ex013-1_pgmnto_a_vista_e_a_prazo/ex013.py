# Faça um algoritmo que leia o salário e mostre seu novo salário, com 15% de aumento.

salary = float(input('Digite o salário atual: R$ '))

print(f'O seu salário atual é de R$ {salary:.2f} reais!')
print(f'Com o aumento de 15%, seu salário será de R$ {(salary + (salary*15/100)):.2f} reais!')
print('PARABÉNS!')
