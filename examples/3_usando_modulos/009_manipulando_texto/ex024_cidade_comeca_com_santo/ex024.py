# faça um programa que leia o nome de uma cidade e diga se ela começa ou não com "Santo" 

city = input('Digite o nome de uma cidade: ')

if "Santo" in city and city[0] == "S":

    print(f'Sim, a cidade começa com "Santo". \nA cidade digitada foi {city}!')

else:

    print(f'Não, a cidade digitada foi {city}!')
