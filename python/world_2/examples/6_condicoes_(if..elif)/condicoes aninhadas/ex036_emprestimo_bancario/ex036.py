# Escreva um programa para aprovar o emprestimo bancário para a compra de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
# Calcule o valor da prestação mensal, sabendo que ela não pode execeder 30% do salário ou então o emprestimo será negado.

house = float(input("Informe o valor da casa: R$ "))
salary = float(input("Informe o seu salário: R$ "))
monthsPay = int(input("Em quantos meses você quer pagar? "))

monthPortion = house / monthsPay

print(f"Valor respectivo a 30% do seu salário: {(salary * 30 / 100):.2f}")
print(f"Parcela por mês referente ao valor do imóvel (R$ {house:.2f} reais) e em qual valor de parcela ficaria este imóvel: (R$ {monthPortion:.2f} reais por mês).")

if  monthPortion <= (salary * 30 / 100 ):
    print(f"O seu emprestimo foi APROVADO! \nO valor de cada pacela será R$ {monthPortion:.2f} reais por mês por {monthsPay} meses que são {monthsPay // 12} anos e {(monthsPay % 12):.1f} meses.")

else:
    print("Infelizmente o seu emprestimo não pode ser aprovado! \nO valor do imóvel que você quer comprar ultrapassa o valor limite de 30% do seu salário para que o emprestimo seja aprovado.")
