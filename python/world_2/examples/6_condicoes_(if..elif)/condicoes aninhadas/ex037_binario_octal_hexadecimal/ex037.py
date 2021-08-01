# Escreva um programa que leia um numero inteiro qualquer e peça para o usuário escolher qual será a base de conversão:

# 1 - para binário
# 2 - para octal
# 3 - para hexadecimal

number = int(input('Informe um número: '))
opcao = int(input('Você quer convertê-lo para: \n1-Binário; \n2-Octal; \n3-Hexadecimal: \n'))
conversao = 0
    

if opcao == 1:
    conversao = bin(number)
    print(f'binario: {conversao}')

elif opcao == 2:
    conversao = oct(number)
    print(f'octal: {conversao}')
    

elif opcao == 3:
    conversao = hex(number)
    print(f'hexadecimal: {conversao}')

else:
    print('Digite uma opção válida!')
