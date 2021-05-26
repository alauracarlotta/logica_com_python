var variavel = "Laura é Muito feliz 123"

console.log(`1 ${typeof variavel}`) // tipo primitivo
console.log(`2 ${variavel == variavel.indexOf(' ')}`) // só tem espaços
console.log(`3 ${isNaN(variavel)}`) // é um numero
console.log(`4 ${variavel.match(/[a-z]/g) && variavel.match(/[0-9]/) == true}`) // é alfa numérico?
console.log(`5 ${variavel == variavel.toLowerCase()}`) // está em minusculas
console.log(`6 ${variavel == variavel.toUpperCase()}`) // está em maiúsculas
// console.log(`7 ${variavel.match(/[a-z]/g) && variavel.match(/[A-Z]/) == true}`) // está capitalizada
console.log(`8 ${variavel.length}`) // Quantos caracteres tem incluindo os espaços!
console.log(`9 ${variavel[0]}`) // Retorna o primeiro elemento do índice
console.log(`10 ${variavel.indexOf('feliz')}`) // Encontrar uma sequencia ou caracter específico (retorna true)
console.log(`11 ${variavel.indexOf('felizes')}`) // Retorna false
console.log(`12 ${variavel.slice(0,12)}`) 
console.log(`13 ${variavel.slice(12)}`) // Slice => Fatiar / A partir dê
console.log(`14 ${variavel.replace('feliz', 'sortuda')}`)
console.log(`15 ${variavel.slice(-3)}`)
console.log(`16 ${variavel.split(' ')}`)
