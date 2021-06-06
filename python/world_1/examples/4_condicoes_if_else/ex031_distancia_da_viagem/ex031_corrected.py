distance = float(input("Qual a distância da sua viagem: "))
print(f'Sua viagem será de {distance:}km')
price = distance * 0.50 if distance <= 200 else distance * 0.45
print(f'O preço da sua passagem será de R$ {price:.2f} reais!')
