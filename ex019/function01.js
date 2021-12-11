//vendo se um número é par ou ímpar
 let v = function parimpar(n){
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

//let res = parimpar()
//console.log(res)

console.log(v(100009))

//é fácil colocar uma function dentro uma váriavel