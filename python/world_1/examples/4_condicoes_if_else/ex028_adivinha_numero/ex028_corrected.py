from random import randint
from time import sleep
machine = randint(0, 5)

print("-=-" * 20)
print('vou pensar num número entre 0 e 5. Tente adivinhar...')
print("-=-" * 20)
user = int(input('Em que numero eu pensei? '))
print('PROCESSANDO...')
sleep(2)

if machine == user:
    print('PARABÉNS! Você acertou!')

else:
    print(f'EU GANHEI! O número que eu pensei foi {machine} e não {user}...')
