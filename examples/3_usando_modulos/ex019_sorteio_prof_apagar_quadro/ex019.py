# Um professor quer sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome escolhido.

from random import  random

name1 = input('Escreva o nome do aluno 1: ')
name2 = input('Escreva o nome do aluno 2: ')
name3 = input('Escreva o nome do aluno 3: ')
name4 = input('Escreva o nome do aluno 4: ')
drawStudent = (random(name1, name2, name3, name4))

print(f'O aluno a apagar o quadro é: {drawStudent}')
