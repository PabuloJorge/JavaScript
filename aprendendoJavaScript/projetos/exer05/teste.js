numeros = [1, 2, 3, 4, 5,6,100,0]

maior = numeros[0]
menor = numeros[0]

for (var c = 0; c < numeros.length; c++) {
    if (numeros[c] > maior) {
        maior = numeros[c]
    }
    if (numeros[c] < menor) {
        menor = numeros[c]
    }
}

console.log(maior)
console.log(menor)