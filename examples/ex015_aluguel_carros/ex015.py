# Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.)

dayRent = int(input('Quantos dias você alugou o carro? '))
kmTraveled = float(input('Quantos km você rodou? '))
valueTotalRent = (dayRent*60) + (kmTraveled*0.15)

print(f'Você ficou {dayRent:.0f} dias com o carro. Rodou um total de {(kmTraveled):.1f}km. \nO total de aluguel a ser pago pelo carro é de R$ {(valueTotalRent):.2f} reais!')
