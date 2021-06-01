# cadeia de caracateres

# sentence = "C u r s o   e m    V  i  d  e  o     P  y  t  h  o  n"
# índice      0 1 2 3 4 5 6 7  8 9 10 11 12 13 14 15 16 17 18 19 20 

sentence = "Curso em Video Python"

print(f'0 - {sentence}')
print(f'1 - {sentence[9]}') # <= fatiamento de uma letra (range)
print(f'2 - {sentence[9:13]}') # <= fatiamento com inicio e término porém com esse método o 13 não aparece. ou seja, se eu quiser pegar a palavra vídeo inteira é preciso se sentence[9:14]
print(f'3 - {sentence[9:14:2]}') # <= inicio em 9, termino em 14 e está pulando de 2 em 2
print(f'4 - {sentence[:5]}') # <= começa do caracter 0 e termina no 5 (exclui a 5 e vai até a 4)
print(f'5 - {sentence[15:]}') # <= Começa na 15 e  termina no fim da sentença
print(f'6 - {sentence[9::3]}') # <= começa em 9, vai até o fim porque u não tem o número do meio dizendo qual é o final e vai fatiando de 3 em 3


print(f'7 - {len(sentence)}') # <= vem de length, tamanho = 21, indo de 0 a 20
print(f'8 - {sentence.count("o")}') # <= conta quantas vezes aparece a letra "ó" na variável
print(f'9 - {sentence.count("o", 0, 13)}') # <= conta quantas vezes aparece a letra "ó" na variável entre os índices 0 a 12 (o último caracetere é ignorado, no caso o 13)
print(f'10 - {sentence.find("deo")}') # <= Monstra em que posição começou aquilo que procuramos na variável, o que no caso é 'deo'
print(f'11 - {sentence.find("Android")}') # <= Como não irá encontrar a string android na variável, será retornado o valor -1
print(f'12 - {"Curso" in sentence}') # < caso verdaeiro, retorna true e caso falso retorna false
print(f'13 - {sentence.replace("Python", "Android")}') # <= Troca uma palavra por outra: troca a primeira pela segunda
print(f'14 - {sentence.upper()}') # <= (upper é metodo, então precisa ser upper() com parenteses => torna todas as letras maiúsculas)
print(f'15 - {sentence.lower()}') # <= (lower é metodo, então precisa ser lower() com parenteses => torna todas as letras minusculas)
print(f'16 - {sentence.capitalize()}') # <= (capitalize é metodo, então precisa ser capitalize() com parenteses => torna todas as letras minusculas e depois somente a primeira letra se tronará maiúscula)
print(f'17 - {sentence.title()}') # <= (title é metodo, então precisa ser title() com parenteses => Analisa quantas palavras tem pelos espaços, ou seja, quebra a frase em cada espaço e coloca letra maiuscula em cada uma das palavras.

sentence2 = "   Aprenda Python  "
# indice     0123456789... (3 espaços no início e 2 espaços no fim) print(f'20 - {}')

print(f'18 - {sentence2.strip()}') # <= Remove todos os espçaos de antes de começar a frase e todos os depois
print(f'19 - {sentence2.rstrip()}') # <= Remove os espaços da direita (r de rigth)
print(f'20 - {sentence2.lstrip()}') # <= Remove os espaços da esquerda (l de left)

sentence3 = sentence.split() # <= Cria uma divisão em cada espaço (Gera uma lista com todas as palavras fatiadas)
print(f'21 - {sentence3}') 
print(f'22 - {"_".join(sentence3)}') # <= Junta todas as palavras fatiadas com _ ou com o que você quiser, então ele pega uma lista de palavras e junta elas numa única variavel, ou seja com um único indice e separa-as pelos _.



# OUTROS EX:

print(sentence[::2])

print("""
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Id et illum nulla iusto quas rem ipsum reprehenderit, dolorum, soluta quos, minima quae harum? 
Accusamus nostrum earum ut doloribus. Dolor, eos.
Quam fugiat numquam dolor neque illo at beatae eligendi ullam nostrum modi! 
Adipisci eveniet nemo veritatis deleniti libero nisi voluptatibus pariatur sunt,
excepturi doloremque architecto accusantium, corporis, aliquam quos eius?
Numquam magni sunt, rerum consequuntur, saepe repellendus tempore repudiandae ratione,
aliquam iusto quia non eum laudantium voluptatibus aspernatur ipsa animi omnis mollitia inventore. 
Dolor, facere eos? Cum corrupti nulla soluta.
""")

print(f'23 - {sentence.upper().count("O")}')

sentence4 = "    Curso em Vídeo com o Prof. Gustavo Guanabara    "
print(f'24 - {len(sentence4)}')
print(f'25 - {len(sentence4.strip())}')

sentence5 = sentence4.strip()
sentence6 = sentence5.split()
print(f'26 - {sentence6[0]}') # 1ª palavra (que está no índice 0)
print(f'27 - {sentence6[0][3]}') # 1ª palavra (que está no índice 0) 4ª letra que está no índice 3
