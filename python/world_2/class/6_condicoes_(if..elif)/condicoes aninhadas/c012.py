""" Estrutura condicional aninhada: """

name = str(input('Digite um nome: '))

if name == 'Laura':
    print('Este name é muito bonito!')

elif name in 'Well Jake Peter Edna':
    print('Esse nome é da sua família?')

elif name == 'Pedro' or name == 'João' or name == 'Joaquim':
    print('Esses são nomes masculinos muito usados em Portugal!!')

else:
    print('Esse name é bem normal!')

print(f'Tenha um bom dia, {name}!')