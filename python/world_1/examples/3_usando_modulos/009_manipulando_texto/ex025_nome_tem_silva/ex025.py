# Faça um programa que recebe o nome de uma pessoa e diga se ela tem "Silva" no nome.

completeName = input('Digite o seu nome completo: ')

if completeName.isnumeric():

    print('Digite um nome válido!')

else:

    if 'Silva' in completeName or 'silva' in completeName: 

        print(f'Sim, há "Silva" no nome informado. \nO nome informado foi {completeName}!')

    else:

        print(f'Não há "Silva" no nome informado.')
