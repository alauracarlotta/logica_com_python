# Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos digitos separados.
# Ex: 1834

# unidade: 4
# dezena: 3
# centena: 8
# milhar: 1

# Podemos fazer matematicamente falando ou como strings

numbers = int(input('Digite um numero de 0 a 9999: '))
numbersSTR = str(numbers)

if numbers < 0 or numbers > 9999:

    print("Valor inválido!")

else: 

    if len(numbersSTR) == 4:

        print(f'Unidades: {numbersSTR[3]}')
        print(f'Dezenas: {numbersSTR[2]}')
        print(f'Centenas: {numbersSTR[1]}')
        print(f'Milhar: {numbersSTR[0]}')

    elif len(numbersSTR) == 3:

        print(f'Unidades: {numbersSTR[2]}')
        print(f'Dezenas: {numbersSTR[1]}')
        print(f'Centenas: {numbersSTR[0]}')
        
    elif len(numbersSTR) == 2:

        print(f'Unidades: {numbersSTR[1]}')
        print(f'Dezenas: {numbersSTR[0]}')

    else:

        print(f'Unidades: {numbersSTR[0]}')
