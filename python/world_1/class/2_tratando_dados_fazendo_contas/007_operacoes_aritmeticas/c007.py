# Operadores lógicos + - * / **(potencia) //(divisão inteira) %(resto da divisão - módulo)
# Ordem => 
# 1º(), 
# 2º**, 
# 3º * / // %, 
# 4º + - 

number1 = int(input('Digite um número: '))
number2 = int(input('Digite outro número: '))

print(f'{number1} + {number2} = {number1 + number2} e ', end='') #Se eu não quiser que quebre a linha a pesar de eu ter colocado um print, assim quebrando a próxima linha, acrescento o end='' com valor nada e assim não quebrará a próxima linha.
print(f'{number1} - {number2} = {number1 - number2} \n e {number1} x {number2} = {number1 * number2}') # \n = nova linha.
print(f'{number1} : {number2} = {(number1 / number2):.3f}. A divisão inteira dá {number1 // number2} inteira e o resto da divisão é {number1 % number2}') # Esse trecho {(number1 / number2):.2f} serve para dizer quantas casas de ponto flutuante eu quero depois da virgula.
print(f'{number1} ^ {number2} = {number1 ** number2}') 

"""
Para a raiz quadrada podemos fazer o seguinte:
81**(1/2) === 9 => forçamos o calculo começar pelo parenteses e em seguida fazer a potenciação,
então criar a raiz quadrada de um numero é a mesma coisa que criar a pontencia dele por meio.

Outro ex:
para raiz cubica
27**(1/3) === 9
"""
