infoUser = input("Digite algo: ")

print("O tipo primitivo de {} é: ".format(infoUser), type(infoUser))
print("Só tem espaços no input {} ?".format(infoUser), infoUser.isspace())
print("{} é um numero? ".format(infoUser), infoUser.isnumeric())

# print(f"É um numero? {infoUser.isnumeric()}")

print("{} é alfabético? ".format(infoUser), infoUser.isalpha())
print("{} é alfanumérico? ".format(infoUser), infoUser.isalnum())
print("{} está em letras maiúsculas? ".format(infoUser), infoUser.isupper())
print("{} está em letras minusculas? ".format(infoUser), infoUser.islower())
print("{} está capitalizada? ".format(infoUser), infoUser.istitle()) #Quando há letras maiusculas e letras minusculas, tipo um título.

