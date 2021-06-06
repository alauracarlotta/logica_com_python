name = str(input('Digite o seu nome: ')).strip()

print(f'Seu nome com todas as letras maiúsculas são assim: {name.upper()}')
print(f'Seu nome com todas as letras minúculas são assim: {name.lower()}')

print(f'O seu nome sem espaços nenhum fica com {len(name) - name.count(" ")} caracteres.')

print(f'Seu primeiro nome tem {name.find(" ")} letras.')
