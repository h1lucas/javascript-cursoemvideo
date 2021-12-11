function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.length == 0) {
        res.innerHTML = '[ERRO] impossível contar'
    } else {
        res.innerHTML = 'contando <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('passo invalido, considerando passo 1')
            p = 1
        }

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c>= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } res.innerHTML += `\u{1F3C1}`
    }
}