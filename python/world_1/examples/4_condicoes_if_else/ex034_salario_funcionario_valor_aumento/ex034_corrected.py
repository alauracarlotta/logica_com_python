salary = float(input('Informe seu salário: R$ '))

if salary > 1250.00:
    increase = (salary + (salary * 10) / 100)
else:
    increase = (salary + (salary * 15) / 100)

print(f'Com um salário de R$ {salary:.2f}, você receberá um aumento de 10%!')
print(f'O valor do seu salário será R$ {increase:.2f}!')
