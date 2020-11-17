function carregar() {
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    
    
    

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        imagem.src = "imagens/manha2.png"
        document.body.style.background = "#feda53"
    } else if (hora <= 18) {
        //Boa tarde
        imagem.src = "imagens/tarde2.png"
        document.body.style.background = "#ca600b"
    } else {
        //Boa noite
        imagem.src = "imagens/noite2.png"
        document.body.style.background = "#533e61"
    }
}