# Crie um programa que leia o nome completo de uma pessoa e mostre: 
# 1 - O nome com todas as letras maiúsculas;
# 2 - O nome com todas minúsculas;
# 3 - Quantas letras ao todo sem considera os espaços;
# 4 - Quantas letras tem o primeiro nome.

name = str(input('Digite o seu nome: '))

print(f'Seu nome com todas as letras maiúsculas são assim: {name.upper()}')
print(f'Seu nome com todas as letras minúculas são assim: {name.lower()}')

nameNoSpaces = name.replace(" ", "")
print(f'O seu nome sem espaços nenhum fica com {len(nameNoSpaces)} caracteres.')

firsName = name.split()
print(f'Seu primeiro nome é {firsName[0]}! Ele tem {len(firsName[0])} letras.')
