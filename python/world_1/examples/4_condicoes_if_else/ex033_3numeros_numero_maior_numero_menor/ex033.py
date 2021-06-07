# Faça um programa que leia três números e mostre qual é o maior e qual é o menor.

number1 = int(input('Informe o 1° número: '))
number2 = int(input('Informe o 2° número: '))
number3 = int(input('Informe o 3° número: '))
smallestNumber = 0
biggestNumber = 0

if number1 < number2:
    smallestNumber = number1
    biggestNumber = number2
else:
    smallestNumber = number2
    biggestNumber = number1


if number3 > number2:
    biggestNumber = number3

if number3 < number1: 
    smallestNumber = number3


print(f'O menor valor digitado foi: {smallestNumber}!')
print(f'O maior valor digitado foi: {biggestNumber}!')
