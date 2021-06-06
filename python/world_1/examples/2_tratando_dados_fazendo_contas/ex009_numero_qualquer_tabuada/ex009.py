# faça um programa que leia um numero qualquer e motre na tela a sua tabuada.

value = int(input('Qual tabuada você quer saber? '))

cont = 1

""" for cont in range(1,11):
    print(f'{cont} x {value} = {cont*value}') """

while cont <= 10:
    print('-'*12)
    print(f'{cont:2} x {value} = {cont*value}')
    cont+=1

