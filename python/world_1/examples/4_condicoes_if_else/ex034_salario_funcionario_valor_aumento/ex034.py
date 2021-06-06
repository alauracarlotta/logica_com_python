# Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.
# Para salários superiores a R$ 1250,00, calcule um aumento de 10%.
# Para os inferiores ou iguais, o aumento será de 15%.

salary = float(input('Informe seu salário: R$ '))

if salary > 1250.00:
    print(f'Com um slário de R$ {salary:.2f}, você receberá um aumento de 10%!')
    print(f'O valor do seu salário será R$ {(salary + (salary * 10) / 100):.2f}!')

else:
    print(f'Com o slaário de R$ {salary:.2f}, o seu aumento será de 15%!')
    print(f'O valor do seu salário passará a ser R$ {(salary + (salary * 15) / 100):.2f}!')
