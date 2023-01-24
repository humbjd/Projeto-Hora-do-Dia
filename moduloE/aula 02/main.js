function verificar() {
    var ini =  document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando'
        let i = number(ini.value)
        let f = number(fim.value)
        let p = number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}
