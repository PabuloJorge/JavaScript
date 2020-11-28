function contar() {
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var resultado = window.document.querySelector('div#resultado')
    if (passo.value.length == 0) {
        window.alert("Passo não pode ser vazio, será considerado o valor '1' ")
        p = 1
    } else{
        var p = Number(passo.value)
    }
    if (inicio.value.length == 0 || fim.value.length == 0) {
        resultado.innerHTML = "Impossível contar!"
    } else {
        resultado.innerHTML = "Contando: <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        if (i < f){
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
                
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
                
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    }


}