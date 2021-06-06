# Escreva um programa que faça o computador "pensar" num numero inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o numero escolhido pelo computador.
# O programa deverá escrever na tela se o usuário venceu ou perdeu!

from random import randint

userNumber = int(input('Digite um número de 0 a 5: '))
randomNumber = randint(0, 5)

if userNumber == randomNumber:

    print('Você acertou!')

else:

    print(f'Você errou, o número sorteado foi {randomNumber}.')