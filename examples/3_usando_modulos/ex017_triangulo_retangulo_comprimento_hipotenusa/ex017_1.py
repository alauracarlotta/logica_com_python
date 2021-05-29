oppositeSide = float(input('Qual é o valor do cateto oposto? '))
adjacentLeg = float(input('Qual é o valor do cateto adjacente? '))
hypotenuse = (oppositeSide ** 2 + adjacentLeg ** 2) ** (1/2)

print(f'Com valor de cateto oposto sendo {oppositeSide:.2f} e cateto adjacente sendo {adjacentLeg:.2f}, \no valor da hipotenusa desse triangulo é {hypotenuse:.2f}.')