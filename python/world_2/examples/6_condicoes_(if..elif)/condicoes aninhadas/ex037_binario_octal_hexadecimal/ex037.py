# Escreva um programa que leia um numero inteiro qualquer e peça para o usuário escolher qual será a base de conversão:

# 1 - para binário
# 2 - para octal
# 3 - para hexadecimal

number = float(input('Informe um número: '))
opcao = int(input('Informe um número: '))
conversao = 0
    

if opcao == 1:
    print('binario')

elif opcao == 2:
    print('octal')

elif opcao == 3:
    print('hexadecimal')

else:
print('Tá tudo errado')

print (conversao)
