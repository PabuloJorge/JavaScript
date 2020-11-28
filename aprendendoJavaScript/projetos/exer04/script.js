function gerarTabuada(){
    var txtnum = window.document.querySelector('input#txtnum')
    var tabuada = window.document.querySelector('select#tabuada')

    if (txtnum.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else{
        var num = Number(txtnum.value)
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num}  x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}