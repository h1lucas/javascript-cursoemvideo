function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `agora são ${hora} horas ${minuto} minutos e ${segundo} segundos`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = 'blue'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "fototarde.png"
        document.body.style.background = 'orange' // posso colocar dentro de uma condição ou fora
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = 'black'
    }
}
// as imagens ficaram uma bosta pq n sei usar o gimp direito