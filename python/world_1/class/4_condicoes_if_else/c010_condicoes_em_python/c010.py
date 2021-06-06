# Condições smples e compostas

# SIMPLIFICADO
time = int(input("Quantos anos tem o seu carro? "))
print('Carro novo'if time <= 3 else 'Carro velho!')
print('--FIM--')

# MAIS LEGIVEL
cartime = int(input("Quantos anos tem o seu carro? "))

if cartime <= 3:
    print("Seu carro é novo!")
else: 
    print("Seu carro é velho!")

print("--FIM--")
