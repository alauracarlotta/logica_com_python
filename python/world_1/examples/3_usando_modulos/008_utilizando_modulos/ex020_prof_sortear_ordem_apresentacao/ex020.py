# O mesmo professor do desafio anterior quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leio o nome dos quatro alunos e mostre a ordem sorteada.

from random import shuffle

n1 = input('Qual é o aluno 1: ')
n2 = input('Qual é o aluno 2: ')
n3 = input('Qual é o aluno 3: ')
n4 = input('Qual é o aluno 4: ')

listNames = [n1, n2, n3, n4]

shuffle(listNames)

print(f'A ordem de apresentação é {listNames}')
