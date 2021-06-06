# Desenvolva um programa que pergunte a distancia de um viagem em km. Calcule o preço da passagem, cobrando R$ 0,50 por Km para viagens até 200km e R$ 0,45 para viagens mais longas.

distanceKm = float(input('Informe a distancia da sua viagem em Km: '))

if distanceKm <= 200:
    print(f'Você irá pagar R$ {(distanceKm * 0.50):.2f}!')
    print('OBRIGADA POR VIAJAR CONOSCO!')

else:
    print(f'Você irá pagar R$ {(distanceKm * 0.45):.2f} na sua passagem!')
    print('OBRIGADA POR VIAJAR CONOSCO!')