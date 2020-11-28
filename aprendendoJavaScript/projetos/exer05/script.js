var numero = window.document.querySelector('input#txtnum')
var lista = window.document.querySelector('select#lista')
var resultado = window.document.querySelector('div#resultado')
var numeros = []


function validarNumero(numero, numeros) {
    return Number(numero) >= 1 && Number(numero) <= 100 && numeros.indexOf(numero) == -1
}


function adicionar() {
    if (validarNumero(numero.value, numeros)) {
        numeros.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já existente na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0

        for (var c = 0; c < numeros.length; c++) {
            soma += numeros[c]
            if (numeros[c] > maior) {
                maior = numeros[c]
            }
            if (numeros[c] < menor) {
                menor = numeros[c]
            }
        }

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores cadastrados é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores cadastrados é ${soma/numeros.length}</p>`
    }


}