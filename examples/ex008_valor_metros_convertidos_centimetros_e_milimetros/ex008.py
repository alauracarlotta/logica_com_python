# Escreva um programa que leia um valor em metros e o exiba convertido em centimetros e milimetros.
# km, hm, dam, m, dm, cm, mm

meters = float(input('Digite a quantidade de metros que você quer convertido: '))

print(f'{meters}m equivalem a: \n{meters/1000}km, \n{meters/100}hm, \n{meters/10}dam, \n{meters*10}dm, \n{meters*100}cm e \n{meters*1000}mm!')
