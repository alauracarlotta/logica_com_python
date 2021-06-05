phrase = str(input("Digite uma frase: ")).upper().strip()
print(f'A letra "A" aparece {phrase.count("A")} vezes na frase.')
print(f'Na {phrase.find("A")+1}ª posição aparece a 1ª letra "A".')
print(f'Na {phrase.rfind("A")+1}ª posição aparece a última letra "A".')
