number1 = int(input('Digite o 1º número: '))
number2 = int(input('Digite o 2º número: '))
number3 = int(input('Digite o 3º número: '))
smallest = number1
biggest = number1

#smallest number test
if number2 < number1 and number2 < number3:
    smallest = number2

if number3 < number1 and number3 < number2:
    smallest = number3

#biggest number test
if number2 > number1 and number2 > number3:
    biggest = number2

if number3 > number1 and number3 > number2:
    biggest = number3

print(f'O menor valor informado foi o {smallest}.')
print(f'O maior valor informado foi o {biggest}.')
