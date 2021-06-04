# Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último nome separadamente.

# Ex: Ana Maria de Souza
# primeiro = Ana
# último = Souza

completeName = input("digite o seu nome completo: ")

completeNameSplitted = completeName.title().split()

if completeName.isnumeric():

    print('Informe um nome válido!')

else:

    print(f'O nome completo informado foi {completeName.title()}')
    print(f'O 1º nome é {completeNameSplitted[0]}.')
    print(f'O último nome é {completeNameSplitted[-1]}.')
