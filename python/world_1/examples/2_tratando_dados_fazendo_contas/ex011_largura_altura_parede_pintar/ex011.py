# Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta pinta uma área de 2m².

wallHeight = float(input('Qual é a altura da parede? '))
wallWidth = float(input('Qual é a largura da parede? '))
wallArea = wallHeight * wallWidth

print(f'A parede a ser pintada com {wallHeight:.1f} de altura e {wallWidth:.1f} de largura tem {wallArea:.1f}m². \nOu seja, serão necessários {(wallArea/2):.1f} litros de tinta para pintar a área toda!')
