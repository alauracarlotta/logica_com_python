velocity = int(input("Informe a velocida em km/h: "))

if velocity > 80:

    print("VOCÊ FOI MULTADO!")
    fineValue = (velocity - 80) * 7
    print(f'Por ter excedido {velocity - 80}km acima do limite, \nVocê deverá pagar R${fineValue:.2f}.')

print('Dirija com cuidado!')
print("Seja um bom motorista!")
