# Faça um programa que leia uma frase pelo teclado e mostre:

# Quantas vezes aparece a letra "A";
# Em que posição ela aparece a primeira vez;
# Em que posição ela aparece a última vez.

phrase = input('Digite uma frase: ')
letterSearch = input('Informe uma letra a ser buscada: ')

print(f'Na frase "{phrase}", a letra A aparece {phrase.count(letterSearch)} vezes.')

if phrase.count(letterSearch) == -1: 
    
    print(f'Não tem nenhuma letra {letterSearch} na frase informada!')

else:
    print(f'Na posição {phrase.find(letterSearch, 0)} aparece a 1ª letra "{letterSearch.upper()}".')
    print(f'Na posição {phrase.rfind(letterSearch, 0)} aparece a última letra "{letterSearch.upper()}".')
