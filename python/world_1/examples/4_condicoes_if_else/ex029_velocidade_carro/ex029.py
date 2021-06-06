# Escrevas um programa que leia a velocidade de um carro.
# Se ele utlrapassar 80km/h, mostre a mensagem que ele foi multado.
# A multa vai custar R$ 7,00 por cada km acima do limite.

velocity = int(input("Informe a velocida em km/h: "))

if velocity <= 80:
    print('MUITO BEM! Você está no limite de velocidade!')
    print("Continuem sendo um bom motorista!")

else:
    print("VOCÊ FOI MULTADO!")
    fineValue = (velocity - 80) * 7
    print(f'Por ter excedido {velocity - 80}km acima do limite, \nVocê deverá pagar R${fineValue:.2f}.')
