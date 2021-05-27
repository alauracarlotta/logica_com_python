# Desenvolva um programa que leia as duas notas de uma aluno, calcule e mostre a sua média.

studentsName = input('Digite o nome do aluno: ')
studentsGrade1 = float(input('Digite a 1ª nota: '))
studentsGrade2 = float(input('Digite a 2ª nota: '))
average = (studentsGrade1+studentsGrade2)/2

print(f'O(a) aluno(a) {studentsName}, com  nota {studentsGrade1} na 1ª prova e  com nota {studentsGrade2} na 2ª prova')
print(f'Teve como média: {average:.2f} pontos!')
